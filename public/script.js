// var io = require('socket.io')(http);
// const socket = io('/')

// console.log(socket)

let videoGrid = document.getElementById("video-grid")
console.log('video grid ', videoGrid)


const socket = io('http://localhost:4000')
const myPeer = new Peer(undefined, {
    host: '/',
    port: '4001',
})

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)   //refer server.js
})

const myVideo = document.createElement('video')
// myVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream)
})

console.log("here")
// io.connect();
// socket.emit('join-room', ROOM_ID, 10)
// socket.emit('join-room', ROOM_ID, 20)

socket.on('user-connected', userId => {
    alert("user connected: " + userId)
})

const addVideoStream = (video, stream) => {
    video.srcObject = stream

    video.addEventListener('loadedmetadata', () => {
        video.play()
    })

    videoGrid.append(video)
}
