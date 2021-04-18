const mongoose = require('mongoose');
const User = require('../models/user');

const userController = {
    login (req, res) {
        res.render('user/login');
    },

    register (req, res) {
        User.find({}).then((users) => {
            var newUser = new User({
                email: 'test' + users.length, 
                username: 'test' + users.length
            });
            newUser.save();
            res.render('user/register', {user: newUser});
        });
    },

    users (req, res) {
        User.find({}).then((allUsers) => {
            res.render('user/users', {users: allUsers});
        });
    }
};

module.exports = userController;