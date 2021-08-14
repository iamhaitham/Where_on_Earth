const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); 
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/agency.routes')(app);

const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection",socket=>{
    socket.on("send_message",data=>{
        socket.broadcast.emit("received_message",data);
    });
});