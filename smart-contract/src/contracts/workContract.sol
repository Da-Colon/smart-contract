// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.8.0;

contract WorkContract {
  uint client;

  function getContract() public view returns (uint) {
    return client;
  }

  function setContract(uint x) public {
    client = x;
  }
}