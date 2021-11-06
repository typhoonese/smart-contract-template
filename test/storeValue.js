//contracts
const storageDemo = artifacts.require('StorageDemo');

//test utils
const truffleAssert = require('truffle-assertions');
const BN = web3.utils.toBN;

//test constants
const valueSetEvent = 'ValueSet';
const storageValue = 5;
const expectedStorageValue = new BN(storageValue);

contract(storageDemo, (accounts) => {
  let storageDemoInstance;
  beforeEach(async () => {
    storageDemoInstance = await storageDemo.new();
  });

  it('When value is set to ' + storageValue + ',' + valueSetEvent + ' event should be emitted.', async () => {
    let tx = await storageDemoInstance.setValue(storageValue, { from: accounts[0] });
    expectedEventOutput = { _from: accounts[0], _value: expectedStorageValue };
    truffleAssert.eventEmitted(
      tx,
      valueSetEvent,
      expectedEventOutput,
      'Event output should match ' + JSON.stringify(expectedEventOutput, null, 2),
    );
  });
});
