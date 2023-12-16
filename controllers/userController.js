const { validationResult } = require('express-validation');
const User = require('../models/User');

const userController = {
    register : (req, res) => {
        res.render('register');
    },

    processRegister : (req, res) => {
        const resultValidation = validationResult(req);

        if(validationResult.errors.length > 0) {
            return res.render('register', {
                errors : resultValidation.mapped(),
                oldData : req.body
            });
        }

        User.create(req.body);

        return res.send('OK, se guradó el usuario');
    },

    login : (req, res) => {
        res.render('login');
    },

    processLogin : (req , res) => {
        
    },

    profile: (req, res) => {
        res.render('profile');
    }
}

module.exports = userController;