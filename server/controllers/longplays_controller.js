const longplays = require('express').Router();
const db = require('../models');
const {Longplay} = db;

//GET ALL LONGPLAYS
longplays.get('/', async (req, res) => {
  try{

   const longplays = await Longplay.findAll({
     attributes: ['name', 'console', 'poster']
   });
   console.log(longplays);
    res.status(200).json(longplays);

  }catch(err){
    res.status(500).send("Server Error");
    console.log(err);
  }
});
module.exports = longplays;