// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


// ROOT
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server!'
  })
})


// Tire CONTROLLERS
const tireController = require('./controllers/bands_controller')
app.use('/bands', bandsController)