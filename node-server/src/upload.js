import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import dotenv from 'dotenv';

//uploads a file to filecoin using web3.storage and returns cid (content identifier)
async function upload (files) {
  dotenv.config();
  
  const token = process.env.WEB3STORAGE_API_KEY;
  console.log(token)
  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

  console.log("hello", files)

  let files1 = ["./paths/blob.json"]
  const storage = new Web3Storage({ token })
  
  console.log(`Uploading ${files1.length} files1`)
  const cid = await storage.put(files1)
  console.log('Content added with CID:', cid)
  return cid
}

export default upload