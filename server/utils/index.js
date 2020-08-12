const {LEETMAPPING} = require('../constants/index')

exports.leetSpeak = (string) => {
  let newString = ""
  for(let i = 0; i < string.length; i++){
    if(LEETMAPPING[string[i].toLocaleLowerCase()]){
      newString += LEETMAPPING[string[i].toLocaleLowerCase()]
    }
    if(!LEETMAPPING[string[i].toLocaleLowerCase()]){
      newString += string[i]
    }
  }
  return newString
}