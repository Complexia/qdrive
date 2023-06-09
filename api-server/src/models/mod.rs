use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct DataStruct {
    pub uuid: Option<String>,
    pub name: Option<String>,
    pub data: Vec<u8>,
}
