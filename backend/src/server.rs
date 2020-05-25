use tonic::{transport::Server, Request, Response, Status},

use testing::tester_server::{Tester, TesterServer};
use testing::{HelloRequest, HelloReply};

pub mod testing {
    tonic::include_proto!("testing");
}

#[derive(Debug, Default)]
pub struct MyTester {}

#[tonic::async_trait]
impl Tester for MyTester {
    async fn say_hello(
        &self,
        req: Request<HelloRequest>,
    ) -> Result<Response<HelloReply>, Status> {
        println!("Got a request: {:?}", req);
        let reply = testing::HelloReply {
            msg: format!("Fuc, u biTcH").into(),
        };
        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50051".parse()?;
    let greeter = MyTester::default();

    Server::builder()
        .add_service(TesterServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
