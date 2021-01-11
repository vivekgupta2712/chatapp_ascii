const express =require('express')
const server = require('server');
const app =express()

const http=require('http').createServer(app)
const PORT=process.env.PORT || 30010
app.listen(3000, '127.0.0.78');
http.listen(PORT, ()=>{
 console.log(`listening on port  ${PORT}` )

})

app.use(express.static(__dirname+ '/public'))
const { get, post } = server.router;

// Launch server
 
app.get('/',(req, res)=>{

	res.sendFile(__dirname + '/index.html');})

//socket

const io = require('socket.io')(http)

io.on('connection',(socket)=>{
	console.log('connection successfully')
})