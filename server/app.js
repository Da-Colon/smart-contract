const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const Web3 = require('web3')
const abi = require('../smart-contract/src/abis/StringContract.json')
const StringsModel = require('./models/strings')
require("dotenv").config();

// ROUTERS
const accountsRouter = require("./routes/accounts");


const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
};

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors(corsOptions));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/")));



app.use("/accounts/", accountsRouter);

// Socket Server 
const httpServer = require('http').Server(app)
const io = require('socket.io')(httpServer)
const web3 = new Web3(new Web3.providers.WebsocketProvider('http://localhost:7545'))
const contract = new web3.eth.Contract(abi.abi, '0x208F01fc1B6f590a44dc60bF7D14DA20CC9CE4D9')

const getAllStrings = async () => {
  return await StringsModel.getAllString();
}

io.on('connection', async (socket) => {
  console.info(`Socket connected, ID: ${socket.id}`);
  const strings = await getAllStrings()
  socket.emit('newText', strings)
  
  socket.on('disconnect', () => {
    console.log(`Socket disconnected, ID: ${socket.id}`);
  });
});


httpServer.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});



contract.events.NewText({})
  .on('data', event => {
    const {name, text} = event.returnValues;
    const string = new StringsModel(text, name, io);
    string.newString();
  })

module.exports = app;
