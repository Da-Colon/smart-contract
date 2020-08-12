// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.8.0;

contract StringContract{
  string public text;
  string public name;

  event NewText(string text, string name);

  function saveText(string memory newText, string memory newName) public {
    text = newText;
    name = newName;
    emit NewText(text, newName);
  }

}
