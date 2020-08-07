var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.users)

router.post('/register', usersController.create);

router.post('/login', usersController.processLogin);

router.get('/logout', usersController.logout)

router.post('/:id', usersController.update)

router.delete('/:id', usersController.delete)

module.exports = router;
