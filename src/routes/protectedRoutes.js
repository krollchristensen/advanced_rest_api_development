// src/routes/protectedRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Beskyttet rute
// Opgave 1: Autentifikation og Autorisation
router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}` });
});

module.exports = router;
