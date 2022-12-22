require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: ".env"});
require("hardhat-deploy");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  // get the first account
  console.log('b')
  for (const account of accounts) {
    console.log('a')
    console.log(account.address);
  }
});




/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {artifacts: "./src/artifacts"},
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/52752'/0'/0"
      },
      chainId: 44787
    }
  }
};
