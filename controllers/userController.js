const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const User = require('../models/User');

const userController = {
    register : (req, res) => {
        res.render('register');
    },

    processRegister : (req, res) => {
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('register', {
                errors : resultValidation.mapped(),
                oldData : req.body
            });
        }

        let userInDB = User.findByEmail(req.body.email);

        if(userInDB){
            return res.render('register', {
                errors : {
                    email: {
                        msg: 'Este email ya está registado'
                    }
                },
                oldData : req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('/user/login');
    },

    login : (req, res) => {
        res.render('login');
    },

    processLogin : (req , res) => {
        let userToLogin = User.findByEmail(req.body.email);
        if(userToLogin){
            let isPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.recordar){
                    res.cookie('userEmail', req.body.email, { maxAge : 1000 * 60 * 2});
                }

                return res.redirect('/user/profile');
            }else{
                return res.render('login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales son inválidas'
                        }
                    }
                })
            }
        }

        return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })

    },

    profile: (req, res) => {
        res.render('profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = userController;