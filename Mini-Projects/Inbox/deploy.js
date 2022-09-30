const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider('YOUR_MNEMONIC','https://goerli.infura.io/v3/e3618d94a05645e5b20270911d92fedc');
const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ',accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['SRUSHTI RATHVA']})
    .send({gas:'1000000',from:accounts[0]});
    console.log('Contract deployed to address ',result);
};
deploy();
