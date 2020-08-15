const db = require("./conn");
const { leetSpeak } = require("../utils");
const websockets = require('../utils/websockets')

class StringsModel {
  constructor(newText, name, io){
    this.text = newText;
    this.name = name;
    this.io = io;
  }

  newString = async () => {
    const leetString = leetSpeak(this.text)
    try{
      await db.any('INSERT INTO strings (string, name) VALUES ($1, $2);', [leetString, this.name])
      websockets.broadCastNewText(this.io)
      console.info(`\nInserted: Name: ${this.name} Text: ${leetString}`)
    } catch (error){
      console.error("\nThere was a problem adding new string")
      return error
    }
  }
}
exports.getAllString = async () => {
  try {
    const query = await db.result('Select * FROM strings;')
    console.info(`\nReturning query for strings list`)
    return query.rows;
  } catch (error) {
    console.error("\nThere was a problem retrieving strings")
    return error
  }
}

module.exports = StringsModel;