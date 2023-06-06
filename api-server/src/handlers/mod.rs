use axum::{response::IntoResponse, Json};
use reqwest::StatusCode;

use crate::models::DataStruct;

pub async fn upload_data(Json(todo): Json<DataStruct>) -> impl IntoResponse {
    (StatusCode::CREATED, Json(todo))
}

pub async fn fetch_data(Json(todo): Json<DataStruct>) -> impl IntoResponse {
    (StatusCode::CREATED, Json(todo))
}
