const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Upgrading contracts with the account:", deployer.address);

  // Proxy contract address
  const proxyAddress = "0xEae5A39026a8c0A6082c7ffBbfcd8aEADCa9332A"; // Replace with the proxy address

  // Get the contract factory correctly by name
  const Token = await ethers.getContractFactory("MyToken");  // Make sure to use the correct name here

  // Upgrade the contract using the proxy address
  const upgraded = await upgrades.upgradeProxy(proxyAddress, Token);
  console.log("MyToken upgraded:", upgraded.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
