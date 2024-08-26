//DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//CONFIG
require('dotenv').config();
app.use(cors());
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));

//CONTROLLERS
const longplaysController = require('./controllers/longplays_controller');
app.use('/api/longplays', longplaysController);

//LISTEN
app.listen(4005, () => {
    //using a random port at the moment
    console.log(`Listening on port 4005`);
})