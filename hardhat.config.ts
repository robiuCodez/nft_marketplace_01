import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: process.env.ENDPOINT_URL as string,
      accounts: [process.env.DEPLOYER_KEY as string],
    },
  },
  // paths: {
  //   sources: "./src/contracts",
  //   artifacts: "./src/abis",
  // },
};

export default config;
