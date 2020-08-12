const db = require("./conn");
const { leetSpeak } = require("../utils");

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
      const strings = await this.getAllString();
      await this.io.emit('newText', strings)
      console.info(`Inserted: Name: ${this.name} Text: ${leetString}`)
    } catch (error){
      console.error("There was a problem adding new string")
      return error
    }
  }

  getAllString = async () => {
    try {
      const query = await db.result('Select * FROM strings;')
      console.info(`Returning Query`)
      return query.rows;
    } catch (error) {
      console.error("There was a problem retrieving strings")
      return error
    }
  }
  static getAllString = async () => {
    try {
      const query = await db.result('Select * FROM strings;')
      console.info(`Returning Query`)
      return query.rows;
    } catch (error) {
      console.error("There was a problem retrieving strings")
      return error
    }
  }
}

module.exports = StringsModel;