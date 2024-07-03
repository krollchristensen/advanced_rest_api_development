// src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validate = require('../middleware/validateMiddleware'); // Opgave 2: Fejlhåndtering og Validering
const userSchema = require('../validators/userValidator'); // Opgave 2: Fejlhåndtering og Validering

// Registrer en ny bruger
// Opgave 2: Validering tilføjet
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: secretpassword
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
router.post('/register', validate(userSchema), authController.register);

// Log ind en bruger
// Opgave 2: Validering tilføjet
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 example: secretpassword
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid input
 */
router.post('/login', validate(userSchema), authController.login);

module.exports = router;
