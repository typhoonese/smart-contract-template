const storageDemo = artifacts.require('StorageDemo');
const truffleAssert = require('truffle-assertions');

contract(storageDemo, (accounts) => {
  let storageDemoInstance;
  beforeEach(async () => {
    storageDemoInstance = await storageDemo.new();
  });

  describe('Set value'),
    () => {
      it('Set value to 5: Assertion with event'),
        async () => {
          let tx = await storageDemoInstance.setValue(5, { from: accounts[0] });
          truffleAssert.eventEmitted(tx, 'ValueSet', (ev) => {
            return ev._from === accounts[0] && ev._value === +value;
          });
        };
    };
});
