# Deploy on the Polygon or Mumbai network

# To deploy on the Polygon or Mumbai network, you can use the command below:

## For the Polygon Mainnet:

npx hardhat run --network polygon scripts/deploy.js

## For the Mumbai Testnet:

npx hardhat run --network mumbai scripts/deploy.js

# This will use your MetaMask private key and the RPC URL configured in hardhat.config.js to deploy the contract.