const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("accounts","prints the list of accounts", async(taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
})

//const ALCHEMY_API_KEY = "cm...";
//this is obtained using the metamask export private key
//const GOERLI_PRIVATE_KEY = "ff...";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    networks: {
      goerli: {
        url: 'https://www.quicknode.com/endpoints/83072/',
        accounts: ['ffb93ed7bec1ca2994a5cfcc48dde3a657e319957b44d3623e8da5cd76399c10']
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs:200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
