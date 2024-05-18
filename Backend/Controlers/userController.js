const bcyrpt=require('bcrypt');
const jwt= require('jsonwebtoken');
const { EmployeeModel } = require('../Models/Employee');

class userManagement {
  async register(req, res) {
    try {
      const { FirstName, LastName, email, role, password } = req.body;

      // Hashing the password
      const hash = await bcyrpt.hash(password, 10);

      // Creating a new user with hashed password
      const user = await EmployeeModel.create({ FirstName, LastName, email, role, password: hash });

      // Sending response
      res.json({ status: "OK", message: 'User registered successfully' });
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
        return res.status(404).json({ error: 'No record existed' });
      }
  
      // Compare passwords
      const passwordMatch = await bcyrpt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'The password is incorrect' });
      }
  
      // Check role
      if (user.role !== role) {
        return res.status(403).json({ error: 'Role does not match' });
      }
  
      // If everything matches, generate token
      const token = jwt.sign({ email: user.email, role: user.role }, "jwt-secret-key", { expiresIn: '1d' });
  
      // Set token as cookie
      res.cookie('token', token);
  
      // Send success response
      res.json({ status: 'OK', role: user.role, message: 'Login Successfully' });
    } catch (error) {
      console.error("Error logging in:", error);
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



