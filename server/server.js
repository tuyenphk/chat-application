let express = require('express')
let http = require('http')
let socket_IO = require('socket.io') 

const PORT = 8001 
let app = express() 
let server = http.Server(app) 
let io = socketIO(server) 

io.on('connection', (socket) => {
  console.log('User is connected sucessfully')
  
  socket.on('disconnect', () => {
    console.log('Sorry! User is unfortunately disconnected')
  })
})

server.listen(PORT, () => {
   console.log(`Running on port ${port}.`);
});