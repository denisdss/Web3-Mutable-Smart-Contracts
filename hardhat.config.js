// hardhat.config.js
require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
require('ethers');

// Configurações de Solidity
module.exports = {
  solidity: {
    version: "0.8.22",  // Versão do Solidity
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    // Configuração da rede Polygon
    polygon: {
      url: `https://polygon-rpc.com/`,  // RPC público para Polygon
      accounts: [process.env.PRIVATE_KEY],  // Usando chave privada da MetaMask (armazenada no .env)
      chainId: 137,  // Polygon Mainnet
    },

    // Configuração para testnet Amoy
    amoy: {
      url: `https://rpc-amoy.polygon.technology/`,  // RPC da Testnet Mumbai
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80002,  // Polygon Mumbai Testnet
    },
  },
};
