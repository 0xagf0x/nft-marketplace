/* 
To deploy:
1. npx hardhat clean
    this cleans hardhats config to make sure everyting is fine

2. npx hardhat node (if not using Goerli)
    this will generate a local blockchain with accounts/keys we can use

3. npx hardhat compile

4. npx hardhat test

5.
- localhost: npx hardhat run --network localhost scripts/deploy.js 
- goerli: npx hardhat run --network goerli scripts/deploy.js
*/

const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("NFTMarketplace Contract deployed to:", nftMarketplace.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


