import express from 'express';
import passport from 'passport';
import { signup, login, googleCallback, refreshToken, logout, registerUser } from '../Controllers/authController.js';
import { authenticateToken } from '../Middleware/authMiddleware.js';

const router = express.Router();

// Local Signup
router.post('/signup', signup);

// Local Login
router.post('/login', login);
router.post('/register', registerUser);


// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    (req, res) => {
        const userId = req.user._id; // Example of sending user ID to the frontend
        res.redirect(`http://localhost:5173/artwork?userId=${userId}`);
    }
);

// Refresh Token
router.post('/refresh-token', refreshToken);

// Logout
router.post('/logout', logout);

// Example of a protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route for authorized users only' });
});

export default router;
