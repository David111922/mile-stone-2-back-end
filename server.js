const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const path = require('path');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '/./config/config.json'); 
console.log(`Config path: ${configPath}`);
const config = require(configPath)[env];
const db = {};

// ROOT
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server!'
  });
});

// Tire CONTROLLERS
const tireController = require('./controllers/tires_controller');
app.use('/tires', tireController);

// LISTEN
app.listen(process.env.PORT, () => {
  console.log(`🎣 Fishing' on port: ${process.env.PORT}`);
});
