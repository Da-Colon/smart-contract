const StringsModel = require('../models/strings')

exports.GET_STRING_LIST = async (req, res) => {
  try{
    const strings = await StringsModel.getStringList();
    return await res.status(200).json(strings)
  } catch (error){
    console.error("\nThere was an error retreiving strings")
    return error
  }
}