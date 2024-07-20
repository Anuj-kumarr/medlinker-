const express = require("express");

const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
// const Patient = require("./Models/userModel");
const patientRotues = require("./Routes/patientRoutes");
const dctrRoutes = require("./Routes/dctrRoutes");
const medRoutes = require("./Routes/medRoutes");
const chatRotues =require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const reportRoutes = require("./Routes/reportRoutes");
dotenv.config();


connectDB();

const app  = express();

app.use(express.json());
app.get("/" ,(req,res)=>{
    res.send("api is  running");
})

app.use("/api/patient",patientRotues);
app.use("/api/dctr",dctrRoutes);
app.use("/api/med",medRoutes);
app.use("/api/chats" , chatRotues);
app.use("/api/messages",messageRoutes);
app.use("/api/report",reportRoutes);


const server  = app.listen(5000,console.log("api is listening at port  = 5000"));


const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
      origin: "http://localhost:3000",  
      // credentials: true,
    },
  });
  
  
  
  
  io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    // socket.on("setup", (userData) => {
         
    //   socket.join(userData._id);
    //   console.log(userData._id);
    //   socket.emit("connected");
    socket.on("send_message",(data)=>{
        //   socket.join(room);
          console.log(data);
          socket.broadcast.emit("receive_msg", data);
        });
    });
  
    
     
    // socket.on("new message",(newMessageReceived)=>{
    //   var chat= newMessageReceived.chat;
  
    //   if(!chat.users)return console.log("chat user is undefined");
  
    //   chat.users.forEach((user)=>{
    //     if(user._id == newMessageReceived.sender._id)return;
  
    //     socket.in(user._id).emit("message recieved",newMessageReceived);
  
    //   });
    // });
      
    // });
