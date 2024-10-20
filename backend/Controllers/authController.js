import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/user.model.js';
import passport from 'passport';

// Generate Access and Refresh Tokens
const generateTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET);
    return { accessToken, refreshToken };
};

// Local Signup (email/password)
export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            email,
            password,
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};


// Local Login (email/password)
export const login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({ message: info ? info.message : 'Login failed' });
        }
        const { accessToken, refreshToken } = generateTokens(user);
        user.refreshToken = refreshToken;
        user.save();
        res.json({ accessToken, refreshToken });
    })(req, res, next);
};

// Google OAuth Callback
export const googleCallback = (req, res) => {
    const { accessToken, refreshToken } = generateTokens(req.user);
    res.json({ accessToken, refreshToken });
};

// Facebook OAuth Callback
export const facebookCallback = (req, res) => {
    const { accessToken, refreshToken } = generateTokens(req.user);
    res.json({ accessToken, refreshToken });
};

// Refresh Token
export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ message: 'No refresh token provided' });

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(403).json({ message: 'Invalid refresh token' });
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);
        user.refreshToken = newRefreshToken;
        await user.save();

        res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(403).json({ message: 'Token expired or invalid' });
    }
};

// Logout
export const logout = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        const user = await User.findOneAndUpdate({ refreshToken }, { refreshToken: null });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
