var express = require('express');
var router = express.Router();
const { Server } = require("socket.io");
const http = require('http');
const app = require('../app')

const serverApp = http.createServer(app);
const httpServer = serverApp.listen(4001, () => {
  console.log('listening on *:4001');
});
//const io = new Server(serverApp, {
const io = new Server(httpServer, {
  cors: {
    /* Allowing the socket to connect to the server. */
    origin: "http://127.0.0.1:5500",
}
});




io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    socket.emit("message", "Hello Jorge");
    console.log("message: " + msg);
  });
  
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/view', (req, res) => {
  
})




module.exports = router;
