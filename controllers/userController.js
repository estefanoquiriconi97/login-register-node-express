

const userController = {
    register : (req, res) => {
        res.render('register');
    },

    processRegister : (req, res) => {

    },

    login : (req, res) => {
        res.render('login');
    },

    processLogin : (req , res) => {
        
    }
}

module.exports = userController;