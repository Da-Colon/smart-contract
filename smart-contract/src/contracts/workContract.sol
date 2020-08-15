// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.8.0;

// Practice creating smart contract

contract WorkContract {
  uint projectCost;

  event PaymentIsSent(address client, uint amount);
  event PaymentWithdrawn(address client);
  event balanceAmount(uint balance);
  
  function makePayment() payable public {
    emit PaymentIsSent(msg.sender, msg.value);
  }

  function withdrawBalance() public {
    msg.sender.transfer(address(this).balance);
    emit PaymentWithdrawn(msg.sender);
  }

  function currentBalance() public {
    emit balanceAmount(address(this).balance);
  }
}

