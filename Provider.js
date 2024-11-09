const Web3 = require('web3');

// Replace with your Infura/Alchemy/QuickNode URL
const providerUrl = 'https://methodical-aged-thunder.quiknode.pro/4acfeb3a0c6463cdf6570e0e23e6da4b888fe852';

// Initialize Web3 instance with provider URL
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

// Verify connection by fetching the latest block number
web3.eth.getBlockNumber()
    .then(blockNumber => console.log("Latest Block:", blockNumber))
    .catch(error => console.error("Connection Error:", error));
