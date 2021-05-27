import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log("Deploying task contract with address:", deployerAddress);

  const taskFactory = await ethers.getContractFactory("Task");
  const task = await taskFactory.deploy(process.env.METHOD_FACTORY_ADDRESS, process.env.UNISTAKER_ADDRESS);

  await task.deployed();

  console.log("task contract deployed at", task.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
