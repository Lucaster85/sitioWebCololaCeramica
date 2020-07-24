const db = require('../database/models');

module.exports = {
    list(req, res) {
        db.Category.findAll({
            include: [{association: 'products'}]
        })
        .then(categories => {
            res.json(categories)
        })
        
    },
    detail(req, res) {

    },
    store(req, res) {

    },
    update(req, res) {

    },
    delete(req, res) {

    }
};