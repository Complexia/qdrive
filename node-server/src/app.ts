import process from 'process'
import minimist from 'minimist'
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import upload from './upload'

async function main () {
 let cid = await upload() 
}

main()