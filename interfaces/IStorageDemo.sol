pragma solidity ^0.8.9;

interface IStorageDemo {
  /**
    EVENTS
     */
  event ValueSet(address _from, uint256 _value);

  /**
    SETTERS
     */

  /** 
    @notice setValue changes the state of value
    @param _value: new value of the state value
    @notice successful transaction emits ValueSet event
   */
  function setValue(uint256 _value) external;

  /**
    GETTERS
     */

  /**
    @notice getValue returns the state of value
    @return _value :the state of value
    */
  function getValue() external returns (uint256 _value);
}
