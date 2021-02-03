const express = require('express')
const http = require('http')
const socketIO = require('socket.io') 
const cors = require('cors')

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users')
const router = require('router')

const app = express() 
const server = http.Server(app) 
const io = socketIO(server)

app.use(cors())
app.use(router)

io.on('connection', (socket) => {
    
    console.log('User is connected successfully')
    
    socket.on('disconnect', () => {
        console.log('Sorry! User is unfortunately disconnected')
    })
})

server.listen(8001, () => {
   console.log(`Running on port 8001`);
});