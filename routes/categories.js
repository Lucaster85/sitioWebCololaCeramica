const { Router } = require('express');
const router = Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.list);

router.get('/:id', categoriesController.detail);

router.post('/', categoriesController.store);

router.patch('/:id', categoriesController.update);

router.delete('/:id', categoriesController.delete);

module.exports = router;