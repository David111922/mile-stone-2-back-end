// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};



ReactDOM.render(<App />, document.getElementById('root'));
