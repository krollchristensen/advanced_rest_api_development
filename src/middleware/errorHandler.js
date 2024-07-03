// src/middleware/errorHandler.js
// Fejlhåndteringsmiddleware
// Opgave 2: Fejlhåndtering
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
};
