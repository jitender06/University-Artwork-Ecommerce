import express from 'express';
import passport from 'passport';
import { signup, login, googleCallback, facebookCallback, refreshToken, logout, registerUser } from '../Controllers/authController.js';
import { authenticateToken } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Local Signup
router.post('/signup', signup);

// Local Login
router.post('/login', login);
router.post('/register', registerUser);
// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), googleCallback);

// Facebook OAuth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), facebookCallback);

// Refresh Token
router.post('/refresh-token', refreshToken);

// Logout
router.post('/logout', logout);

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route for authorized users only' });
});

export default router;
