class Websockets {

  static connection = (io) => {
    io.on('connection', async (socket) => {
      console.info(`\nSocket connected, ID: ${socket.id}`);
      
      socket.on('disconnect', () => {
        console.log(`\nSocket disconnected, ID: ${socket.id}`);
      });
    });
  }
  
  static broadCastNewText = async (io) => {
    const strings = await StringsModel.getStringList()
    io.emit('newText', strings)
  }
}

module.exports = Websockets

const StringsModel = require('./strings')