//contracts
const storageDemo = artifacts.require('StorageDemo');

//test utils
const truffleAssert = require('truffle-assertions');
const { expect } = require('chai');
const BN = web3.utils.toBN;

//test constants
const valueSetEvent = 'ValueSet';
const storageValue = 5;
const expectedStorageValue = new BN(storageValue);

contract(storageDemo, (accounts) => {
  const expectedMsgSender = accounts[0];
  beforeEach(async () => {
    this.instance = await storageDemo.new();
  });

  describe('Setting a storage value', async () => {
    it('When value is set to ' + storageValue + ',' + valueSetEvent + ' event should be emitted.', async () => {
      let tx = await this.instance.setValue(storageValue, { from: accounts[0] });
      expectedEventOutput = { _from: expectedMsgSender, _value: expectedStorageValue };
      truffleAssert.eventEmitted(
        tx,
        valueSetEvent,
        expectedEventOutput,
        'Event output should match ' + JSON.stringify(expectedEventOutput, null, 2),
      );
    });
  });
});
