var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

router.get('/', productsController.list);

router.get('/:id', productsController.detail);

router.post('/', productsController.store);

router.patch('/:id', productsController.update);

router.delete('/:id', productsController.delete);

module.exports = router;