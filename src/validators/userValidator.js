// src/validators/userValidator.js
const Joi = require('joi');

// Valideringsskema for brugerdata
// Opgave 2: Validering
const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
});

module.exports = userSchema;
