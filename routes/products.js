var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsControllers');

router.get('/', productsController.list);

router.get('/detail/:id', productsController.detail);

router.get('/create', productsController.create);
router.post('/create', productsController.store);

router.get('/edit/:id', productsController.edit);
router.put('edit/:id', productsController.update);

router.get('/delete/:id', productsController.delete);

module.exports = router;