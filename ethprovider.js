const { ethers } = require("ethers");

// Replace with your Infura/Alchemy/QuickNode URL
const providerUrl = 'https://methodical-aged-thunder.quiknode.pro/4acfeb3a0c6463cdf6570e0e23e6da4b888fe852';

// Create a provider instance with the URL
const provider = new ethers.JsonRpcProvider(providerUrl);

// Verify connection by fetching the latest block number
provider.getBlockNumber()
    .then(blockNumber => console.log("Latest Block:", blockNumber))
    .catch(error => console.error("Connection Error:", error));
