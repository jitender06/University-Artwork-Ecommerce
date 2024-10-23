import User from "../Models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find({}).select('-password'); // Exclude the password field
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
}
