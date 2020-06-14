var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.users)

router.get('/register', usersController.register);
router.post('/register', usersController.create);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.get('/logout', usersController.logout)

module.exports = router;
