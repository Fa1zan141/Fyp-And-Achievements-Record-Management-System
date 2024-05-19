const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './Config/.env' });
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
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

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role !== "Admin") {
      return res.status(403).json({ message: "Not Admin" });
    }
    req.user = decoded; // store the decoded user info in request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { verifyUser, verifyAdmin };
