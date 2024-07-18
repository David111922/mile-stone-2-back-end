const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🎣 Fishing' on port: ${port}`);
});
