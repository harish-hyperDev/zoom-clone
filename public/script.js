// var io = require('socket.io')(http);
// const socket = io('/')

// console.log(socket)
const socket = io('http://localhost:4000')

console.log("her")
// io.connect();
socket.emit('join-room', ROOM_ID, 10)
socket.emit('join-room', ROOM_ID, 20)
socket.emit('join-room', ROOM_ID, 30)

socket.on('user-connected', userId => {
    console.log("user connected: ", userId)
})