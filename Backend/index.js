const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const jwt= require('jsonwebtoken');
const multer = require('multer');
const cookieParser= require('cookie-parser');
const bcyrpt=require('bcrypt');
const dotenv=require('dotenv');
const dbConnection = require('./Config/db');
const userRouter = require('./Routes/routes');

//For Database
dotenv.config({path: "./Config/.env"});
dbConnection();

//APP USE
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(cors({
  origin:["http://localhost:5173"],
  methods:["GET","POST","PUT", "DELETE"],
  credentials: true
}))

//Routes App Use
app.use('/FYP', userRouter)

//Protected Routes Authentication
const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json("Token is missing");
    } else {
      const decoded = await jwt.verify(token, "jwt-secret-key");
      if (decoded.role === "Admin") {
        next();
      } else {
        return res.json("Not Admin");
      }
    }
  } catch (error) {
    console.error('Error verifying user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

app.get('/admindashboard', verifyUser, async (req, res) => {
  try {
    res.json("Success");
  } catch (error) {
    console.error('Error in admin dashboard:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Student Profile

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 3000`);
});



