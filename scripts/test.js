const { ethers } = require("hardhat");

async function testUpdatedContract() {
  const proxyAddress = "0xEae5A39026a8c0A6082c7ffBbfcd8aEADCa9332A"; // Replace with your proxy address
  const myToken = await ethers.getContractAt("MyToken", proxyAddress);
  
  // Test the new function 'setAdditionalValue'
  //await myToken.setAdditionalValue(100);
  const value = await myToken.getAdditionalValue();
  const valueX2 = await myToken.totalSupply();
  console.log("Additional value in MyToken:", value.toString());
  console.log("Total Supply MyToken:", valueX2);
}

testUpdatedContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
