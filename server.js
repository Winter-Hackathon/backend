const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const logger = require('./middleware/logger')
const morgan = require('morgan')
require('dotenv').config();

const server = express();

// middleware
// for functioning with APPLICATIONS 
server.use(cors());
// for security
server.use(helmet());
// for logs
server.use(morgan("dev"));
server.use(logger);

// setting my data to be sent as json
server.use(express.json());
// server.use(express.urlencoded({extended: true}));

// server welcome message
server.get("/", (req, res) => {
  try {
    res.send(`Server is Alive & Willing.`);
  } catch (error) {
    res.status(500).json(error.response);
  }
});

// ROUTES
// users

//exporting the server code
module.exports = server;
