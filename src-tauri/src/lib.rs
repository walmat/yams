mod command;
mod error;
mod models;

#[cfg(mobile)]
mod mobile;
#[cfg(mobile)]
pub use mobile::*;

use tauri::App;
use tauri::Manager;
use window_shadows::set_shadow;

use crate::command::{logout, refresh_token, sign_in, sign_up};

pub type SetupHook = Box<dyn FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send>;

#[derive(Default)]
pub struct AppBuilder {
    setup: Option<SetupHook>,
}
impl AppBuilder {
    pub fn new() -> Self {
        Self::default()
    }
    #[must_use]
    pub fn setup<F>(mut self, setup: F) -> Self
    where
        F: FnOnce(&mut App) -> Result<(), Box<dyn std::error::Error>> + Send + 'static,
    {
        self.setup.replace(Box::new(setup));
        self
    }
    pub fn run(self) {
        let setup = self.setup;
        tauri::Builder::default()
            .plugin(tauri_plugin_app::init())
            .plugin(tauri_plugin_shell::init())
            .plugin(tauri_plugin_os::init())
            .plugin(tauri_plugin_window::init())
            .setup(move |app| {
                if let Some(setup) = setup {
                    (setup)(app)?;
                }
                let main_window = app.get_window("main").unwrap();
                #[cfg(any(windows, target_os = "macos"))]
                set_shadow(&main_window, true).unwrap();

                Ok(())
            })
            .invoke_handler(tauri::generate_handler![
                sign_in,
                sign_up,
                refresh_token,
                logout
            ])
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }
}
