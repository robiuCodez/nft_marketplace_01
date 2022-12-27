import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  // 12D3KooWA9CrrGA7iVxC57fWZEAHifAWL2gm3uq8ZQWcuHh7qBnu
  const base_uri =
    "https://ipfs.io/ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc";

  const DevConnect = await ethers.getContractFactory("DevConnect");

  const devConnect = await DevConnect.deploy("DevConnect", "DEV", base_uri);

  // ensure this contract is deployed
  await devConnect.deployed();
  // get address of deployed contract on the internet
  const address = JSON.stringify({ address: devConnect.address }, null, 4);

  // save address to file
  fs.writeFile("./abis/contractAddress.json", address, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  console.log("Deployed Contract Address : ", devConnect.address);
  // 0x5FbDB2315678afecb367f032d93F642f64180aa3
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

// Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
// Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

// Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
// Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
