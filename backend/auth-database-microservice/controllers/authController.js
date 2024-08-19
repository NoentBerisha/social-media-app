const bcrypt = require('bcrypt');
const { User } = require('../models');

const signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  signup,
};