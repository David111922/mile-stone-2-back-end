const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');

// Allow CORS too the client | Frontend.
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROOT
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server!'
  });
});

// Tire CONTROLLERS
const tireController = require('./controllers/tires_controller');
app.use('/api/tires', tireController);

// LISTEN
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🎣 Fishing' on port: ${port}`);
});
