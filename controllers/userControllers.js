// userControllers.js
const User = require('../models/user');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      // Add logic to update user based on userId
      res.json({ message: `Update user with userId: ${userId}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
     
      res.json({ message: `Delete user with userId: ${userId}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = UserController;
