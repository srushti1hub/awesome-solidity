//importing necessary modules
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//absoulute path pointing to Inbox.sol
const inboxPath = path.resolve(__dirname,'contracts','Inbox.sol');

//reading content of Inbox.sol
const src = fs.readFileSync(inboxPath,'utf-8');

//compiling and exporting Inbox.sol
module.exports = solc.compile(src,1).contracts[':Inbox'];