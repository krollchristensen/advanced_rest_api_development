// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware til beskyttelse af ruter
// Opgave 1: Autentifikation og Autorisation
module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access denied' });

    // Verificer JWT
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        req.user = user;
        next();
    });
};
