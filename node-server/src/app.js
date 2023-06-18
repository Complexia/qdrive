import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import upload  from './upload.js'

// async function main () {
//  let cid = await upload() 
// }

// main()

import express from 'express';
const app = express();
const port = 3000;

// Define a route handler for the root path
app.post('/upload', async (req, res) => {
  try {
    let cid = await upload(req);
    // Send the response
    res.send(cid);  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});