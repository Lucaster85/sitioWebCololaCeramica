module.exports = {
    index(req, res) {
        res.render('index', { title: 'Colola Ceramica' })
    },
    sendMessege(req, res) {
        res.redirect('/')
    },
    about(req, res) {
        res.send('SOBRE NOSOTROS')
    }
}