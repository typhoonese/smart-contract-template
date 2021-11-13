const StorageDemo = artifacts.require('StorageDemo');

module.exports = async function (deployer) {
  let storageDemoAddress;

  await deployer.deploy(StorageDemo).then(async (receipt) => {
    storageDemoAddress = receipt.address;
    console.log(`Address of storage demo contract is ${storageDemoAddress}.`);
  });
};
