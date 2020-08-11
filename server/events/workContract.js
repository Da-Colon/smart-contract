const Web3 = require('web3')
const web3 = new Web3("http://localhost:7545")
const abi = require('../../smart-contract/build/contracts/WorkContract.json')
var WorkContract = new web3.eth.Contract(abi.abi, '0x0916e04ff698ee5Bea7257A387d95f6F83e16be6');

console.log(WorkContract.currentBalance())