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
    socket.on('join', ({name, room}, callback) => {
        const {error, user} = addUser({id:socket.id, name, room});
        if (error) return callback(error);
        socket.join(user.room);
        socket.emit('message', {user: 'admin', text`${user.name}, welcome to room ${user.room}.`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });
    
    
    socket.on('disconnect', () => {
        console.log('Sorry! User is unfortunately disconnected')
    })


server.listen(8001, () => {
   console.log(`Running on port 8001`);
});