import { Web3Storage } from 'web3.storage'
import { getFilesFromPath } from 'web3.storage'
import { File } from 'web3.storage'
import dotenv from 'dotenv';

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'
  dotenv.config();

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_API_KEY
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function getFiles (path) {
    const files = await getFilesFromPath(path)
    console.log(`read ${files.length} file(s) from ${path}`)
    return files
  }
  
  function makeFileObjects () {
    // You can create File objects from a Buffer of binary data
    // see: https://nodejs.org/api/buffer.html
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: 'world' }
    const buffer = Buffer.from(JSON.stringify(obj))
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([buffer], 'hello.json')
    ]
    return files
  }

  async function storeFiles (files) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

async function initiate(filePath) {
    const files = await getFiles(filePath)
    const cid = await storeFiles(files)
    return cid
}

export default initiate


