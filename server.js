const express = require('express');
// const { rmSync } = require('fs'); 
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidv4 } = require('uuid')

app.set('view engine','ejs')
app.use(express.static('public')) 

app.get('/', (req,res) => {
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req,res) => {
    res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
    console.log('connected to io')
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.emit('user-connected', userId)
    })
})

// 
server.listen(4000);