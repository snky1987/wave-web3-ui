const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    await waveContract.createInput("Hello you");
    await waveContract.connect(randomPerson).createInput("Hello you again");

    console.log("We have %d total inputs!", await waveContract.getTotalInputs())
    console.log("Here are the inputs:", await waveContract.getInputs())
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log("Main process error", { error });
        process.exit(1);
    }
};

runMain();
