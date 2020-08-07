var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.post('/contact', indexController.sendMessege);
//no si si hace falta en la api

router.get('/about', indexController.about);
//no si si hace falta en la api



module.exports = router;
