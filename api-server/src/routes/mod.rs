

use axum::routing::{get, post};
use axum::Router;




use tower::ServiceBuilder;



use tower_http::trace::TraceLayer;

use crate::handlers::upload_data;


pub fn routes() -> Router {
    
    

    

    let app = Router::new()
        // Here we setup the routes. Note: No macros
        
        
        .route("/upload-data", post(upload_data))
        
       
        // Using tower to add tracing layer
        .layer(ServiceBuilder::new().layer(TraceLayer::new_for_http()).into_inner());

    app
}