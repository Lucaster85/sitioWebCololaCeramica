const { check, body } = require('express-validator');

module.exports = [
    check('name')
    .isLength({min:3})
    .withMessage('Elejí un nombre de al menos 3 caracteres.'),

    check('email')
    .isEmail()
    .withMessage('Ingresá una dirección de correo electrónico válida.'),

    body('password')
    .custom((value, {req}) => {
        if(value != ''){
            if(value.length < 8){
                return false;
            } else {
                return true;
            };
        };

        return true;
    })
    .withMessage('Tu contraseña debe tener al menos 8 carácteres.'),

    body('c_password')
    .custom((value, {req}) => {
        if(req.body.password != ''){
            if(value != req.body.password) {
                return false
            } else {
                return true;
            }
        };
        return true;
    })
    .withMessage('Tus contraseñas no coinciden.'),

    body('avatar')
    .custom((value, {req}) => {
        if(req.files[0] != undefined) {
            let comprobarExtension = /(.*?)\.(jpg|gif|jpeg|png)$/
            return comprobarExtension.test(req.files[0].filename)
        } else {return false}
    })
    .withMessage('Tu imagen debe estar en formato: ".jpg", ".jpeg", ".png" o ".gif".')
]