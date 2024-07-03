// src/controllers/authController.js
const bcrypt = require('bcryptjs'); // Hashing af kodeord
const jwt = require('jsonwebtoken'); // Generering af JWT
const users = require('../data/users');

// Registrer en ny bruger
// Opgave 1: Autentifikation og Autorisation
exports.register = async (req, res) => {
    const { username, password } = req.body;

    // Hash kodeordet før det gemmes
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };

    // Tilføj bruger til array
    users.push(user);
    res.status(201).json({ message: 'User registered successfully' });
};

// Log ind en bruger og generer en JWT
// Opgave 1: Autentifikation og Autorisation
exports.login = async (req, res) => {
    const { username, password } = req.body;

    // Find brugeren i array
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Tjek om kodeordet er korrekt
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generer en JWT
    const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
};
