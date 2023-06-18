import process from 'process'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
require('dotenv').config();

//uploads a file to filecoin using web3.storage and returns cid (content identifier)
async function upload (files) {
  
  
  const token = process.env.WEB3STORAGE_API_KEY;

  if (!token) {
    return console.error('A token is needed. You can create one on https://web3.storage')
  }

 

  const storage = new Web3Storage({ token })
  

 

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)
  return cid
}

export default upload