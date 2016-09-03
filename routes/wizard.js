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


router.get('/step2', function (req, res, next) {
    res.render('location', { title: 'Set location and radius' });
});

router.post('/step2', function (req, res, next) {
	var userId = req.cookies["user-id"];
	var position = req.body;
    usersDb
	    .readProfile(userId)
	    .then(function (result) {
	    	var userProfile = result.resource;
	    	userProfile.preferences.location = position;
            usersDb
	            .upsertProfile(userProfile)
	            .then(function (result) {
	                console.log(`Location set.`);
	                res.end();
	            })
	            .fail(function (error) {
	                res.render('error', { title: 'Error occured', message: 'Error during saving User profile' });
	            });
	    })
	    .fail(function (error) {
	        res.render('error', { title: 'Error occured', message: 'Error during reading User profile' });
	    });
});

module.exports = router;
