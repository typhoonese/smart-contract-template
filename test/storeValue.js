//contracts
const storageDemo = artifacts.require('StorageDemo');

//test utils
const truffleAssert = require('truffle-assertions');
const { expect } = require('chai');
const BN = web3.utils.toBN;
const chai = require('chai');
const bnChai = require('bn-chai');
const { context } = require('fast-check');
chai.use(bnChai(BN));

//test constants
const valueSetEvent = 'ValueSet';
const storageValue = 5;
const expectedStorageValue = new BN(storageValue);
const testMsg = 'On-chain value should match test data';

contract(storageDemo, (accounts) => {
  const expectedMsgSender = accounts[0];
  beforeEach(async () => {
    this.instance = await storageDemo.new();
  });

  describe('Setting a storage value', async () => {
    describe('truffleAssert.eventEmitted style 1', async () => {
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

  describe('Getting a storage value', async () => {
    describe('Testing with chai', async () => {
      it('When storage value is called with getValue(), the value should be ' + storageValue, async () => {
        await this.instance.setValue(storageValue, { from: accounts[0] });
        let result = await this.instance.getValue({ from: accounts[0] });
        expect(result, testMsg).to.eq.BN(storageValue);
      });
    });
  });
});
