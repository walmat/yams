use dotenv::dotenv;
use supabase_rust::Supabase;

use crate::models::User;

async fn client() -> Supabase {
    dotenv().ok();

    let supabase_url = std::env::var("SUPABASE_URL").unwrap();
    let supabase_api_key = std::env::var("SUPABASE_API_KEY").unwrap();
    let supabase_jwt_secret = std::env::var("SUPABASE_JWT_SECRET").unwrap();

    Supabase::new(
        Some(&*supabase_url),
        Some(&*supabase_api_key),
        Some(&*supabase_jwt_secret),
    )
}

#[tauri::command]
pub async fn sign_in(email: String, password: String) -> Result<Vec<User>, String> {
    let client: Supabase = client().await;
    let response = client
        .sign_in_password(&email, &password)
        .await
        .map_err(|e| e.to_string())?;
    let body = response.text().await.map_err(|e| e.to_string())?;
    let user: Vec<User> = serde_json::from_str(&body).map_err(|e| e.to_string())?;
    Ok(user)
}

#[tauri::command]
pub async fn sign_up(email: String, password: String) -> Result<Vec<User>, String> {
    println!("Email: {}, Password: {}", email, password);
    let client: Supabase = client().await;
    let response = client
        .signup_email_password(&email, &password)
        .await
        .map_err(|e| e.to_string())?;

    println!("Response: {:?}", response);
    let body = response.text().await.map_err(|e| e.to_string())?;
    let user: Vec<User> = serde_json::from_str(body.as_str()).unwrap();
    Ok(user)
}

#[tauri::command]
pub async fn refresh_token(refresh_token: String) -> Result<Vec<User>, String> {
    let client: Supabase = client().await;
    let response = client
        .refresh_token(&refresh_token)
        .await
        .map_err(|e| e.to_string())?;
    let body = response.text().await.map_err(|e| e.to_string())?;
    let user: Vec<User> = serde_json::from_str(body.as_str()).unwrap();
    Ok(user)
}

#[tauri::command]
pub async fn logout() -> Result<bool, String> {
    let client: Supabase = client().await;
    client.logout().await.map_err(|e| e.to_string())?;
    Ok(true)
}
