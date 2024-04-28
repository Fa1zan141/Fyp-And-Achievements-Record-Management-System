const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./Models/Employee');
const jwt= require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


/*
EmployeeModel.create({
  
  FirstName :"Reema",
  LastName: "Choudhary",
  email: "Admin@gmail.com",
  role: "Admin",
  password: "admin123"
  })
  */

// Connect to MongoDB
mongoose.connect("mongodb+srv://muhammadfaizan:124@cluster0.gm5sg1g.mongodb.net/FYP")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Registration Route
app.post('/register', async (req, res) => {

 try {

    const newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
//for login
app.post('/login', async (req, res) => {

    const{email, password,role}=req.body;
    try {
      const user = await EmployeeModel.findOne({ email,role });
      if (user) {
        if (user.password === password && user.email===email && user.role===role) {
          res.json({ status: 'success', message: 'Login Successfully' });
        } else {
          res.json({ status: 'error', message: 'Credentials Incorrect' });
        }
      } else {
        res.json({ status: 'error', message: 'User Not Registered' });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    let token = jwt.sign({email}, 'Faizan');
    res.cookie("Token",token);
  });
  //For Logout
  app.get("/logout", function(req, res){
    res.cookie("Token","");
    res.redirect("/splash");
  });

  //For Dynamic Role Routing
 



// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});



