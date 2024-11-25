const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Upgrading contracts with the account:", deployer.address);

  // Endereço do contrato proxy
  const proxyAddress = "0xEae5A39026a8c0A6082c7ffBbfcd8aEADCa9332A"; // Substitua pelo endereço do proxy

  // Obtenha a fábrica do contrato corretamente pelo nome
  const Token = await ethers.getContractFactory("MyToken");  // Certifique-se de usar o nome correto aqui

  // Atualize o contrato usando o endereço do proxy
  const upgraded = await upgrades.upgradeProxy(proxyAddress, Token);
  console.log("MyToken upgraded:", upgraded.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
