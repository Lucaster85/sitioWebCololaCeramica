var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.get('/contact', indexController.contact);
router.post('/contact', indexController.sendMessege);

router.get('/about', indexController.about);



module.exports = router;
