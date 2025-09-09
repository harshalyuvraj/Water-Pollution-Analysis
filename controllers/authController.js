//controller/authoController
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sign Up function
exports.signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if both name, email, and password are provided
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already exists' });

        // Create and save new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Sign-Up Error:", error);
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Sign In function
exports.signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Validate password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT token with environment variable
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Sign-in successful', token });
    } catch (error) {
        console.error("Sign-In Error:", error);
        res.status(500).json({ message: 'Error signing in' });
    }
};
