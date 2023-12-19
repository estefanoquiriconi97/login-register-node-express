const express = require('express');
const router = express.Router();
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Controller
const userController = require('../controllers/userController');

//Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validation = require('../middlewares/validateRegisterMiddleware');

//Formulario de registros 
router.get('/register', guestMiddleware, userController.register);
router.post('/register', validation, uploadFile.single('image'), userController.processRegister);

//Formulario de Login
router.get('/login',guestMiddleware,  userController.login);

//Procesar el login
router.post('/login', userController.processLogin);



//Perfil de usuario 
router.get('/profile',authMiddleware, userController.profile);

//Logout
router.get('/logout', userController.logout);


module.exports = router;