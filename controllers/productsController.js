const db = require('../database/models');

module.exports = {
    list(req, res) {
        db.Products.findAll()
        .then(products => {
            res.json(products)
        })
    },
    detail(req, res) {
        res.json(/*detalle*/);
    },
    store(req, res) {
        
    },
    update(req, res) {
        
    },
    delete(req, res) {
        
    },
}