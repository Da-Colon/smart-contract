const Web3 = require('web3')

class Accounts {
  constructor(){
    this.account;
  }

  async getAllAccounts() {
    this.web3 = new Web3("http://localhost:7545")
    const accounts = await this.web3.eth.getAccounts()
    return accounts
  }

  
}

module.exports = Accounts