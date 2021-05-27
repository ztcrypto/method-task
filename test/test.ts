import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";
import * as chai from "chai";
import { MethodNFTFactory } from "../typechain/MethodNFTFactory";
import { solidity } from "ethereum-waffle";
chai.use(solidity);

const BN = BigNumber.from;

describe("Test Method NFT", function () {
  let owner: Signer, account1: Signer, account2: Signer, account3: Signer;
  let methodNFT: MethodNFTFactory;
  let token, uniStaker;
  const decimals = BN(10).pow(BN(18));

  beforeEach(async function () {
    [owner, account1, account2, account3] = await ethers.getSigners();
    const methodNFTFactory = await ethers.getContractFactory("MethodNFTFactory");
    methodNFT = (await methodNFTFactory.deploy()) as MethodNFTFactory;

    const methodVaultV2Factory = await ethers.getContractFactory("MethodVaultV2");
    const methodVaultV2 = await methodVaultV2Factory.deploy();

    await methodNFT.addTemplate(ethers.utils.randomBytes(32), methodVaultV2.address);

    const tokenFactory = await ethers.getContractFactory("TestToken");
    token = await tokenFactory.deploy();

    const powerSwitchFactory = await ethers.getContractFactory("PowerSwitchFactory");
    const powerSwitch = await powerSwitchFactory.deploy();

    const rewardPoolFactory = await ethers.getContractFactory("RewardPoolFactory");
    const rewardPool = await rewardPoolFactory.deploy();


    const uniStakerFactory = await ethers.getContractFactory("UniStaker");
    uniStaker = await uniStakerFactory.deploy(await owner.getAddress(), rewardPool.address, powerSwitch.address, token.address);
    await uniStaker.registerVaultFactory(methodNFT.address);
  });
  it("Test task", async () => {
    const taskFactory = await ethers.getContractFactory("Task");
    const task = await taskFactory.deploy(methodNFT.address, uniStaker.address);
    await token.transfer(task.address, BN(1000).mul(decimals))
    await task.mintAndStake(token.address, BN(1000).mul(decimals));
  })
});
