import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { login, refreshToken, logout, registerUser } from '../Controllers/authController.js';
// import { authenticateToken } from '../Middleware/authMiddleware.js';
// import { generateTokens } from '../Util/tokenUtils.js';

const router = express.Router();
const generateTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET);
    return { accessToken, refreshToken };
};
// Local Login
router.post('/login', login);
router.post('/register', registerUser);


// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    async (req, res) => {
        const userId = req.user._id; // Example of sending user ID to the frontend
        const { accessToken, refreshToken } = generateTokens(req.user);
        // Store the refresh token in the user record
        req.user.refreshToken = refreshToken;
        await req.user.save();  // Save the user with the refresh token
        // Construct the data object to store in localStorage (similar to local strategy)
        const data = {
            accessToken,
            refreshToken,
            user: {
                name: req.user.name,
                email: req.user.email,
                role: req.user.role // You can customize this as needed
            }
        };

        // Redirect to the frontend with data as query params (can be handled by frontend)
        const redirectUrl = `http://localhost:5173/painting?data=${encodeURIComponent(JSON.stringify(data))}`;
        res.redirect(redirectUrl);
    }
);

// Refresh Token
router.post('/refresh-token', refreshToken);

// Logout
router.post('/logout', logout);

// Example of a protected route
// router.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'This is a protected route for authorized users only' });
// });

export default router;
