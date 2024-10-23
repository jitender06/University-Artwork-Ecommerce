import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../Models/user.model.js';

// Middleware to protect routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
});

// Middleware to check if the user is admin
export const admin = (req, res, next) => {
  console.log(req)
  if (req.user && req.user.role==="admin") {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};
