const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/usersController');
const path = require('path');
const multer = require('multer');

/* MIDDLEWARES */

const editProfileValidator = require('../middlewares/editProfileValidator');

// ** MULTER **
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'public', 'img', 'users'));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
const upload = multer({ storage: storage });
// ** MULTER **

/* GET users listing. */
router.get('/', usersController.users)

router.get('/register', usersController.register);
router.post('/register', upload.any(),usersController.create);

router.get('/login', usersController.login);
router.post('/login', usersController.processLogin);

router.post('/logout', usersController.logout)

router.get('/editProfile', usersController.edit)
router.put('/editProfile', upload.any(), editProfileValidator, usersController.update)

router.delete('/delete', usersController.delete)

module.exports = router;
