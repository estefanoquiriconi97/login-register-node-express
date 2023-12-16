const { body } = require('express-validator');


validation = [

    body('correo').isEmail().withMessage('El email no es valido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('nombre').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')

]

module.exports = validation;