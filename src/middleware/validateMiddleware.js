// src/middleware/validateMiddleware.js
// Middleware til datavalidering
// Opgave 2: Validering
const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    next();
};

module.exports = validate;
