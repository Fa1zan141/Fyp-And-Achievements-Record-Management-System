const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { EmployeeModel } = require('../Models/Employee');
const dotenv = require('dotenv');

dotenv.config({ path: './Config/.env' });

class userManagement {
  async register(req, res) {
    try {
      const { FirstName, LastName, email, role, password } = req.body;
      const userExist = await EmployeeModel.findOne({ email });
      if (userExist) {
        return res.status(400).json({ message: "User already exists with this email" });
      }

      const hash = await bcrypt.hash(password, 10);
      const user = await EmployeeModel.create({ FirstName, LastName, email, role, password: hash });
      res.status(201).json({ status: "OK", message: 'User registered successfully' });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req, res) {
    try {
      const { email, password, role } = req.body;
      const user = await EmployeeModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'No record existed' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'The password is incorrect' });
      }

      if (user.role !== role) {
        return res.status(403).json({ error: 'Role does not match' });
      }

      const token = jwt.sign({ userId: user._id, email: user.email, role: user.role, profilePicture: user.profilePicture }, process.env.SECRET_KEY, { expiresIn: '2d' });
      res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      res.status(200).json({ status: 'OK', data: { role, token, user }, message: 'Login Successfully' });
    } catch (error) {
      console.error("Error logging in:", error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async logout(req, res) {
    try {
      res.clearCookie('token');
      res.status(200).json({ status: 'OK', message: 'Logout Successfully' });
    } catch (error) {
      console.error('Error logging out:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async updateprofile(req, res) {
    try {
      // Verify token presence and decode user ID
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
          return res.status(401).json({ message: 'Token is missing' });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decoded.userId;

      // Check user authentication
      if (!userId) {
          return res.status(401).json({ message: 'User authentication failed' });
      }
      
      // Extract profile update data from request body
      const { FirstName, LastName, email, role, dob, city, postalCode } = req.body;
      const profilePicture = req.file;

      const updateData = {
          FirstName,
          LastName,
          email,
          role,
          dob,
          city,
          postalCode,
          profilePicture: req.file.filename
      };

      // Update user profile
      const user = await EmployeeModel.findByIdAndUpdate(userId, updateData, { new: true });

      // Handle user not found
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Respond with updated user profile
      res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
      // Handle errors
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  //Curd 
  async getAllUsers(req, res) {
    try {
      const users = await EmployeeModel.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await EmployeeModel.findByIdAndDelete(id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getuserProfileById(req, res) {
    try {
      const id = req.params.id;
      const userProfile = await EmployeeModel.findById(id);
      if (!userProfile) {
        return res.status(404).json({ status: 'fail', message: 'User profile not found' });
      }
      res.json(userProfile);
    } catch (error) {
      console.error('Error getting User profile by ID:', error);
      res.status(500).json({ status: 'fail', message: 'Failed to get User profile', error: error.message });
    }
  }

  async changePassword(req, res) {
    try {
        const { currentPassword, newPassword } = req.body;
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token is missing' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.userId;

        if (!userId) {
            return res.status(401).json({ message: 'User authentication failed' });
        }

        const user = await EmployeeModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Current password is incorrect' });
        }

        const hash = await bcrypt.hash(newPassword, 10);
        user.password = hash;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


}



module.exports = new userManagement();
