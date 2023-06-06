use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    
    let addr = SocketAddr::from(([0, 0, 0, 0], 3030));
    println!("axum listening on {}", addr);
    axum::Server::bind(&addr).serve(api_server::routes::routes().into_make_service()).await.unwrap();
}
