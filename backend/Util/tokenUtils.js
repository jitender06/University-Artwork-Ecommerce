// utils/tokenUtils.js
import jwt from 'jsonwebtoken';

export const generateTokens = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };

    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15m',
    });

    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    });

    return { accessToken, refreshToken };
};
