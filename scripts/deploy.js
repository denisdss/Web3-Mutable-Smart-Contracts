const { ethers, upgrades } = require("hardhat");

async function main() {
  // Getting the deployer's address
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the "MyToken" contract that will be deployed
  const MyToken = await ethers.getContractFactory("MyToken");

  const tokenName = "MyToken";
  const tokenSymbol = "MTK";
  const initialSupply = ethers.parseUnits("1000000", 18); // 1 million tokens with 18 decimal places

  // Deploy the contract with proxy
  const myToken = await upgrades.deployProxy(MyToken, [tokenName, tokenSymbol, initialSupply], { initializer: "initialize" });
  console.log("MyToken deployed to:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
