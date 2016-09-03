var express = require('express');
var usersDb = require('../db/users');
var router = express.Router();

router.get('/step1', function (req, res, next) {
    var userId = req.cookies['user-id'];
    usersDb
        .readProfile(userId)
        .then(function (result) {
            var user = result.resource;

            res.render('artists', { artists: user.topArtists });
        })
        .fail(function (error) {
            res.render('error', { title: 'Error occured', message: 'Error during reading User profile' });
        });
});

module.exports = router;
