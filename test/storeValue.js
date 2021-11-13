//contracts
const storageDemo = artifacts.require('StorageDemo');

//test utils
const truffleAssert = require('truffle-assertions');
const { expect } = require('chai');
const BN = web3.utils.toBN;
const chai = require('chai');
const bnChai = require('bn-chai');
chai.use(bnChai(BN));

//test constants
const valueSetEvent = 'ValueSet';
const storageValue = 5;
const expectedStorageValue = new BN(storageValue);
const testMsg = 'On-chain value should match test data';

contract(storageDemo, (accounts) => {
  const expectedMsgSender = accounts[0];
  // eslint-disable-next-line mocha/no-top-level-hooks
  beforeEach(async () => {
    this.instance = await storageDemo.new();
  });

  describe('Setting a storage value', () => {
    describe('truffleAssert.eventEmitted style 1', () => {
      it(`When value is set to ${storageValue}, ${valueSetEvent} event should be emitted.`, async () => {
        const tx = await this.instance.setValue(storageValue, { from: accounts[0] });
        const expectedEventOutput = { _from: expectedMsgSender, _value: expectedStorageValue };
        truffleAssert.eventEmitted(
          tx,
          valueSetEvent,
          expectedEventOutput,
          `Event values should match expected event output`,
        );
      });
    });
  });

  describe(`Getting a storage value`, () => {
    describe(`Testing with chai`, () => {
      it(`When storage value is called with getValue(), the value should be ${storageValue}`, async () => {
        await this.instance.setValue(storageValue, { from: accounts[0] });
        const result = await this.instance.getValue({ from: accounts[0] });
        expect(result, testMsg).to.eq.BN(storageValue);
      });
    });
  });
});
