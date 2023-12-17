const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

//Controller
const userController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validation = require('../middlewares/validateRegisterMiddleware');

//Formulario de registros 
router.get('/register', userController.register);
router.post('/register', uploadFile.single('image'), validation, userController.processRegister);

//Formulario de Login
router.get('/login', userController.login);

router.post('/login', userController.processLogin);



//Perfil de usuario 
router.get('/profile/:userId', userController.profile);


module.exports = router;