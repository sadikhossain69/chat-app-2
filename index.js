const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const http = require('http');
const expressServer = http.createServer(app)
const port = 5000 || process.env.PORT;

const {Server} = require("socket.io")
const io = new Server(expressServer)

io.on('connection', (socket) => {
    console.log("New User Connected");

    setTimeout(() => {
        socket.send("Learn With Sadik (Server --> Client)")
    }, 10000);

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    })

})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(port, () => {
    console.log("Server Run At 5000");
})