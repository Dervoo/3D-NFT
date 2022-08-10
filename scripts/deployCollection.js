const hre = require('hardhat');
const fs = require('fs');
/* 
  To deploy the smart contracts use
  npx hardhat run --network localhost scripts/deploy.js
*/
async function main() {

  const Nft = await hre.ethers.getContractFactory('Nft');
    const uris = [
    "https://jsonkeeper.com/b/LQXT",
    // "https://jsonkeeper.com/b/BLPT",
    "https://jsonkeeper.com/b/MJ8Q",
    // "https://jsonkeeper.com/b/7TRH"

    
];
  const nft = await Nft.deploy('DDD Cars Collection', 'DDD', "0xB7e224427A3393f4B02D7098Fc5830895d564740", uris);
  await nft.deployed();
  console.log('Collection deployed to:', nft.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
