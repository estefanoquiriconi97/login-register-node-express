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
router.post('/register', [
    body('fullName').isEmpty().withMessage('El nombre completo es requerido'),
    body('email').isEmpty().withMessage('El email es requerido'),
    body('password').isEmpty().withMessage('El password es requerido')
], userController.processRegister);

//Formulario de Login
router.get('/login', userController.login);

router.post('/login', userController.processLogin);



//Perfil de usuario 
router.get('/profile/:userId', userController.profile);


module.exports = router;