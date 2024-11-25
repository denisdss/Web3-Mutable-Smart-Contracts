const { ethers, upgrades } = require("hardhat");

async function main() {
  // Obtendo o endereço do deployer
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Obtenha o contrato "MyToken" que será implantado
  const MyToken = await ethers.getContractFactory("MyToken");

  const tokenName = "MyToken";
  const tokenSymbol = "MTK";
  const initialSupply = ethers.parseUnits("1000000", 18); // 1 milhão de tokens com 18 casas decimais

  // Implante o contrato com proxy
  const myToken = await upgrades.deployProxy(MyToken, [tokenName, tokenSymbol, initialSupply], { initializer: "initialize" });
  console.log("MyToken deployed to:", myToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
