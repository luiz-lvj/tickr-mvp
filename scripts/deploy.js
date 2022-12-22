const hre = require("hardhat");
async function main() {

  //get signer
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying contracts with the account:", deployer.address);
  

  const TICKR = await hre.ethers.getContractFactory("EmitTicket");
  const tickr = await TICKR.deploy();

  await tickr.deployed();

  console.log(
    `tickr deployed to ${tickr.address}`
  );

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});