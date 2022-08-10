const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));

    await waveContract.createInput("Hello you");
    await waveContract.connect(randomPerson).createInput("Hello you again");
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);

    console.log("We have %d total inputs!", await waveContract.getTotalInputs());
    console.log("Here are the inputs:", await waveContract.getInputs());
    console.log("Contract balance:", hre.ethers.utils.formatEther(contractBalance));
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
