const mongoose = require('mongoose');
const User = require('../models/user');

const userController = {
    login (req, res) {
        res.render('user/login');
    },

    register (req, res) {
        if (req.method == "POST"){

        }
        res.render('user/register');
    },

    users (req, res) {
        User.find({}).then((allUsers) => {
            res.render('user/users', {users: allUsers});
        });
    }
};

module.exports = userController;