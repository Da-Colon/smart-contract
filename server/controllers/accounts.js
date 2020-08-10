const AccountsModel = require('../models/accounts')


exports.GET_ALL_ACCOUNTS = async (req, res) => {
  try{
    const Model = new AccountsModel();
    const accounts = await Model.getAllAccounts();
    return await res.status(200).json(accounts)
  } catch (error){
    console.error("There was an error retreiving accounts")
    return error
  }
}

