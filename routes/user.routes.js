const express = require('express');
const router = express.Router();

//Controller
const userController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validation = require('../middlewares/validateRegisterMiddleware');

//Formulario de registros 
router.get('/register', userController.register);

//Procesar el Registro
router.post('/register', userController.processRegister);

//Formulario de Login
router.get('/login', userController.login);

router.post('/login', userController.processLogin);



//Perfil de usuario 
router.get('/profile/:userId', userController.profile);


module.exports = router;