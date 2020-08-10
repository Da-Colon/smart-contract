const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

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
// const httpServer = require('http').Server(app)
// const io = require('socket.io')(httpServer, {
//   handlePreflightRequest: (req, res) => {
//     const headers = {
//         "Access-Control-Allow-Headers": "Content-Type, Authorization",
//         "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
//         "Access-Control-Allow-Credentials": true
//     };
//     res.writeHead(200, headers);
//     res.end();
// }
// });

// const user = {}
// io.on('connection', (socket) => {
//   console.info(`Socket connected, ID: ${socket.id}`);
//   user[socket.id] = {
//     accountId: socket.handshake.query
//   }

//   socket.on('disconnect', () => {
//     console.log(`Socket disconnected, ID: ${socket.id}`);
//   });
// });

// httpServer.listen(process.env.PORT || 7545, () => {
//   console.log(`Server started on port ${process.env.PORT || 7545}`);
// });


module.exports = app;
