module.exports = {
    users(req,res) {
        res.send('BIENVENIDO USUARIO')
    },
    register(req, res) {
        res.send('FORMULARIO DE REGISTRO');
    },
    create(req, res) {
        res.redirect('/login')
    },
    login(req, res) {
        res.send('FORMULARIO DE LOGIN')
    },
    processLogin(req, res) {
        res.send('VER PRODUCTOS')
    },
    logout(req, res) {
        res.redirect('login')
    }
}