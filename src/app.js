// src/app.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const errorHandler = require('./middleware/errorHandler'); // Opgave 2: Fejlhåndtering
const swaggerUi = require('swagger-ui-express'); // Opgave 3: Dokumentation af API'er
const swaggerJsdoc = require('swagger-jsdoc'); // Opgave 3: Dokumentation af API'er

// Swagger konfiguration
// Opgave 3: Dokumentation af API'er
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'REST API Documentation',
            version: '1.0.0',
            description: 'API documentation for the REST API'
        },
        servers: [{ url: 'http://localhost:3000' }]
    },
    apis: ['./src/routes/*.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Opgave 3: Dokumentation af API'er

app.use(express.json());
app.use('/auth', authRoutes); // Opgave 1 og 2: Autentifikation og Validering
app.use('/api', protectedRoutes); // Opgave 1: Autentifikation og Autorisation
app.use((req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});
app.use(errorHandler); // Opgave 2: Fejlhåndtering

module.exports = app;
