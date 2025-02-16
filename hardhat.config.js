// hardhat.config.js
require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require('ethers');

// Solidity settings
module.exports = {
  solidity: {
    version: "0.8.22",  // Solidity version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Polygon network configuration
    polygon: {
      url: `https://polygon-rpc.com/`,  // Public RPC for Polygon
      accounts: [process.env.PRIVATE_KEY],  // Using private key from MetaMask (stored in .env)
      chainId: 137,  // Polygon Mainnet
    },

    // Configuration for Amoy testnet
    amoy: {
      url: `https://rpc-amoy.polygon.technology/`,  // RPC for Mumbai Testnet
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80002,  // Polygon Mumbai Testnet
    },
  },
};
