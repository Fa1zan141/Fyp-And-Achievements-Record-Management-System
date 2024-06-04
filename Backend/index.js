const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const dbConnection = require('./Config/db');
const userRouter = require('./Routes/routes');
const socketio = require('socket.io');


const { EmployeeModel } = require('./Models/Employee'); 

// Initialize environment variables
dotenv.config({ path: './Config/.env' });

// Connect to the database

dbConnection();

// Create Express app
const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/FYP', userRouter);

app.use('/uploads', express.static(__dirname + '/public/uploads'));

// Socket.io setup
const io = socketio(server, {
  cors: {
    origin: 'http://localhost:5173',
  }
});

let users = [];

io.on('connection', socket => {
  console.log('New client connected', socket.id);

  socket.on('addUser', userId => {
    const isUserExist = users.find(user => user.userId === userId);
    if (!isUserExist) {
      const user = { userId, socketId: socket.id };
      users.push(user);
      io.emit('getUsers', users);
    }
  });

  socket.on('sendMessage', async ({ senderId, receiverId, message, conversationId }) => {
    try {
      const user = await EmployeeModel.findById(senderId); 
      console.log('sender :>> ', senderId, receiverId);
      
      if (!senderId || !receiverId) {
        console.error('Sender or receiver ID is missing');
        return;
      }
      
      const receiver = users.find(user => user.userId === receiverId);
      const sender = users.find(user => user.userId === senderId);
  
      if (!receiver || !sender) {
        console.error('Receiver or sender not found');
        return;
      }
  
      if (receiver) {
        io.to(receiver.socketId).to(sender.socketId).emit('getMessage', {
          senderId,
          message,
          conversationId,
          receiverId,
          user: { id: user._id, FirstName: user.FirstName, email: user.email }
        });
      } else {
        io.to(sender.socketId).emit('getMessage', {
          senderId,
          message,
          conversationId,
          receiverId,
          user: { id: user._id, FirstName: user.FirstName, email: user.email }
        });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  });

  socket.on('disconnect', () => {
    users = users.filter(user => user.socketId !== socket.id);
    io.emit('getUsers', users);
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
