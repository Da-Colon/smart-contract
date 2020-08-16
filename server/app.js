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
const Websocket = require('./models/websockets')
require("dotenv").config();

// ROUTERS
const accountsRouter = require("./routes/accounts");
const stringRouter = require("./routes/stringList")


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
app.use("/strings", stringRouter)

// Socket Server 
const httpServer = require('http').Server(app)
const io = require('socket.io')(httpServer)

Websocket.connection(io);

httpServer.listen(process.env.PORT || 5000, () => {
  console.log(`\nServer started on port ${process.env.PORT || 5000}`);
});

// Contract Event WebSocket
const web3 = new Web3(new Web3.providers.WebsocketProvider('http://localhost:7545'))
const contract = new web3.eth.Contract(abi.abi, '0x208F01fc1B6f590a44dc60bF7D14DA20CC9CE4D9')

contract.events.NewText({})
  .on('data', event => {
    const {name, text} = event.returnValues;
    const string = new StringsModel(text, name, io);
    string.newString();
  })

module.exports = app;
