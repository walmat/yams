use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
pub struct Account {
    id: String,

    #[serde(rename = "userId")]
    user_id: String,

    #[serde(rename = "type")]
    account_type: String,

    provider: String,

    #[serde(rename = "providerAccountId")]
    provider_account_id: String,

    #[serde(rename = "refreshToken")]
    refresh_token: String,

    #[serde(rename = "accessToken")]
    access_token: String,

    #[serde(rename = "expiresIn")]
    expires_in: i32,

    #[serde(rename = "emailVerified")]
    email_verified: DateTime<Utc>,

    image: String,

    onboarded: bool,

    #[serde(rename = "createdAt")]
    created_at: DateTime<Utc>,
}

#[derive(Deserialize, Serialize)]
pub struct Session {
    id: String,

    #[serde(rename = "sessionToken")]
    session_token: String,

    #[serde(rename = "userId")]
    user_id: String,

    expires: DateTime<Utc>,
}

#[derive(Deserialize, Serialize)]
pub struct User {
    id: String,

    name: String,

    email: String,

    #[serde(rename = "emailVerified")]
    email_verified: DateTime<Utc>,

    image: String,

    onboarded: bool,

    #[serde(rename = "createdAt")]
    created_at: DateTime<Utc>,
}

#[derive(Deserialize, Serialize)]
pub struct VerificationToken {
    identifier: String,

    token: String,

    #[serde(rename = "createdAt")]
    expires: DateTime<Utc>,
}
