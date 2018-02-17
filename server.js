const express = require('express');
const app = express();
const queryString = require('query-string');

app.use(express.static('travelblog'));

router.post('/users/login', function (req, res) {
    var users = req.app;
    var email = req.body.email;
    var password = req.body.password;
    if (email.length > 0 && password.length > 0) {
        users.findOne({email: email, password: password}, function (err, user) {
            if (err) {
                res.json({status: 0, message: err});
            }
            if (!user) {
                res.json({status: 0, msg: "not found"});
            }
            res.json({status: 1, id: user._id, message: " success"});
        })
    } else {
        res.json({status: 0, msg: "Invalid Fields"});
    }
});