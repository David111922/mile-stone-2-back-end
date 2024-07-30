const express = require('express');
const app = express();
const cors = require('cors');
const { Sequelize } = require('sequelize');
const path = require("path");

// // Allow CORS too the client | Frontend.
// const corsOptions = {
//   origin: 'https://backend-production-1cdd.up.railway.app/',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));
app.use(cors());

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")))

// !setup for running app from backend build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")));
}

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