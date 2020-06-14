module.exports = {
    list(req, res) {
        res.send('LISTADO DE PRODUCTOS');
    },
    detail(req, res) {
        res.send('DETALLE DE PRODUCTO');
    },
    create(req, res) {
        res.send('CREA UN PRODUCTO');
    },
    store(req, res) {
        res.redirect('/create');
    },
    edit(req, res) {
        res.send('FORMULARIO DE EDICION');
    },
    update(req, res) {
        res.redirect('/detail/:id');
    },
}