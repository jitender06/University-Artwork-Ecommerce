import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../Models/user.model.js';
import passport from 'passport';

// Generate Access and Refresh Tokens
const generateTokens = (user) => {
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET);
    return { accessToken, refreshToken };
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            name,
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
    passport.authenticate('local', { session: false }, async(err, user, info) => {
        if (err || !user) {
            return res.status(400).json({ message: info ? info.message : 'Login failed' });
        }
        const { accessToken, refreshToken } = generateTokens(user);
        user.refreshToken = refreshToken;
        await user.save();
        res.json({
            accessToken,
            refreshToken,
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });
    })(req, res, next);
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
