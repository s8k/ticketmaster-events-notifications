var express = require('express');
var usersDb = require('../db/users');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('notifications', { title: 'Notifications' });
});

router.get('/poll', function(req, res, next) {
	var userId = req.cookies["user-id"];
    usersDb
    	.readProfile(userId)
	    .then(function (result) {
	    	var userProfile = result.resource;
	    	var notifications = userProfile.notifications ? userProfile.notifications : [];
	    	userProfile.notifications = [];
	        usersDb
	            .upsertProfile(userProfile)
	            .then(function (result) {
	            	res.send({ notifications: notifications });
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