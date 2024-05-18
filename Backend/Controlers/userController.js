const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { EmployeeModel } = require('../Models/Employee');
const dotenv = require('dotenv');

dotenv.config({ path: './Config/.env' });

class userManagement {
  async register(req, res) {
    try {
      const { FirstName, LastName, email, role, password } = req.body;
      const userexist = await EmployeeModel.findOne({ email });
      if (userexist) {
        return res.json({ message: "User Already Exists with this email" });
      } else {
        // Hashing the password
        const hash = await bcrypt.hash(password, 10);
        // Creating a new user with hashed password
        const user = await EmployeeModel.create({ FirstName, LastName, email, role, password: hash });
        // Sending response
        res.json({ status: "OK", message: 'User registered successfully' });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password, role } = req.body;
  
      // Find the user by email
      const user = await EmployeeModel.findOne({ email });
  
      if (!user) {
        return res.json({ error: 'No record existed' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.json({ error: 'The password is incorrect' });
      }
  
      // Check role
      if (user.role !== role) {
        return res.json({ error: 'Role does not match' });
      }
  
      // If everything matches, generate token
      const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, process.env.SECRET_KEY, { expiresIn: '2d' });
      // Set token as cookie
      res.cookie('token', token);
  
      // Send success response with user data
      res.json({ status: 'OK', data: { role, token, user }, message: 'Login Successfully' });
    } catch (error) {
      console.error("Error logging in:", error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  async logout(req, res) {
    try {
      // Clear the token cookie
      res.clearCookie('token');
      // Send success response
      res.json({ status: 'OK', message: 'Logout Successfully' });
    } catch (error) {
      // If an error occurs, log it and send an error response
      console.error('Error logging out:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new userManagement();
