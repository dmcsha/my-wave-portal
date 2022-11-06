const main = async() => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed for: ", waveContract.address);
    console.log("Contract deployed by: ", owner.address);

    await waveContract.getTotalWaves();             //testing the new functions

    const waveTxn1 = await waveContract.wave();       //testing the new functions
    await waveTxn1.wait();

    const waveTxn2 = await waveContract.wave();       //testing the new functions
    await waveTxn2.wait();

    const waveTxn3 = await waveContract.connect(randomPerson).wave();       //testing the new functions
    await waveTxn3.wait();

    const cfn1 = await waveContract.drinkCoffee(12);          //this is used to test our functions
    await cfn1.wait();

    const cfn2 = await waveContract.drinkCoffee(23);          //this is used to test our functions
    await cfn2.wait();

    const cfn3 = await waveContract.drinkCoffee(50);          //this is used to test our functions
    await cfn3.wait();

    const cfn4 = await waveContract.drinkCoffee(41);          //this is used to test our functions
    await cfn4.wait();

    await waveContract.getTotalWaves();

};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();