pragma solidity ^0.8.9;

import "../../interfaces/IStorageDemo.sol";

contract StorageDemo is IStorageDemo {
  uint256 private value;

  /**
    SETTERS
     */

  /** 
    @notice setValue changes the state of value
    @param _value: new value of the state value
    @notice successful transaction emits ValueSet event
   */
  function setValue(uint256 _value) public override {
      value = _value;
      emit ValueSet (msg.sender, _value);
  }

  /**
    GETTERS
     */

  /**
    @notice getValue returns the state of value
    @return _value :the state of value
    */
  function getValue() public override view returns (uint256 _value) {
      return value;
  }
}
