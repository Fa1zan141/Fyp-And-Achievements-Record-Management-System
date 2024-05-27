const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './Config/.env' });

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Changed to use Bearer token from headers
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // store the decoded user info in request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

const checkUserRole = (allowedRoles) => {
  return (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Changed to use Bearer token from headers
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = decoded; // store the decoded user info in request object
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};

module.exports = { verifyUser, checkUserRole };
