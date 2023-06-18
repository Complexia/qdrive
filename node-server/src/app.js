import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import upload  from './upload.js'
import initiate from './uploadweb3.js'

// async function main () {
//  let cid = await upload() 
// }

// main()

import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

// Define a route handler for the root path
app.post('/upload', async (req, res) => {
  try {
    
    let cid = await initiate(req.body.paths[0].path);
    // Send the response
    res.send(cid);  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.post('/test', (req, res) => {
  const jsonPayload = req.body;
  // Access and work with the JSON payload here
  console.log(jsonPayload)
  // Send a response
  res.send('Received the JSON payload');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});