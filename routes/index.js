const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');
//Route for home controller
router.get('/', homeController.home);

//Route to handle project 
router.use('/project', require('./project'));

module.exports = router;
