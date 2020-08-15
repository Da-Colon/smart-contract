const stringsQuery = require('../models/strings')

exports.connection = (io) => {
  io.on('connection', async (socket) => {
    console.info(`\nSocket connected, ID: ${socket.id}`);
    
    this.broadCastNewText(socket)
    
    socket.on('disconnect', () => {
      console.log(`\nSocket disconnected, ID: ${socket.id}`);
    });
  });
}

exports.broadCastNewText = async (io) => {
  const strings = await getAllStrings()
  io.emit('newText', strings)
}

const getAllStrings = async () => {
  return await stringsQuery.getAllString();
}