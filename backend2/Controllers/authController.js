import { OAuth2Client } from 'google-auth-library';
import User from '../Models/user.model.js'
import jwt from 'jsonwebtoken'


const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email or password is incorrect' });
        }
        let checkPassword = await user.matchPassword(password)
        if (!checkPassword) {
            return res.status(400).json({ message: 'Email or password is incorrect' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            'process.env.JWT_SECRET',
            { expiresIn: '1h' }
        );

        res.json({ token, user });

    } catch (error) {
        res.status(500).json({ errormessage: error.message })
        console.log(error)
    }

}

const registerController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({
            name,
            email,
            password,
        })
        await user.save();
        const token = jwt.sign({ id: user._id, role: user.role }, 'process.env.JWT_SECRET', { expiresIn: '1h' })
        res.status(200).json({ toke: token })
    } catch (error) {
        res.status(500).json({ errormessage: error.message })
        console.log(error)
    }
}

const googleController = async (req, res) => {
    const client = new OAuth2Client('433110103002-j1o3rg05v2o62bcmqj0gvkj35svoqiiu.apps.googleusercontent.com');
    const { token } = req.body; // Google JWT from frontend

    try {
        // 1. Verify Google JWT
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '433110103002-j1o3rg05v2o62bcmqj0gvkj35svoqiiu.apps.googleusercontent.com',
        });
        const payload = ticket.getPayload();

        const googleId = payload['sub'];
        const email = payload['email'];
        const name = payload['name'];
        const picture = payload['picture'];

        // 2. Check if user already exists in your database
        let user = await User.findOne({ email });

        if (!user) {
            // If user doesn't exist, create a new one with the Google data
            user = new User({
                // googleId,
                name,
                email,
                // avatar: picture, // Save the Google profile picture if you want
                role: 'user', // You can define roles as needed
            });
            await user.save();
        }

        // 3. Issue your own JWT for session management in your app
        const appToken = jwt.sign(
            { id: user._id, role: user.role },
            'process.env.JWT_SECRET',
            { expiresIn: '1h' }
        );

        // Send back your app's JWT
        res.status(200).json({ token: appToken, user });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid Google token' });
    }
}

export { loginController, registerController, googleController }