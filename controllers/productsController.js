const db = require('../database/models');

module.exports = {
    list(req, res) {
        db.Product.findAll({
            include: [{association: 'category'}]
        })
        .then(products => {
            res.json(products)
        })
    },
    detail(req, res) {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}]
        })
        .then(product => {
            res.json(product);
        })
    },
    store(req, res) {
        
    },
    update(req, res) {
        
    },
    delete(req, res) {
        
    },
}