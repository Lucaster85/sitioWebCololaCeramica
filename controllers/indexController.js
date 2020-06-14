module.exports = {
    index(req, res) {
        res.render('index', { title: 'Colola Ceramica' })
    },
    contact(req, res) {
        res.render('contact', {title: 'FORMULARIO DE CONTACTO'})
    },
    sendMessege(req, res) {
        res.redirect('/')
    },
    about(req, res) {
        res.send('SOBRE NOSOTROS')
    }
}