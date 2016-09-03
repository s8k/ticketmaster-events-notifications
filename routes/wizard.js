var express = require('express');
var usersDb = require('../db/users');
var router = express.Router();

router.get('/step1', function(req, res, next) {
    var userId = req.cookies['user-id'];
    usersDb
        .readProfile(userId)
        .then(function(result) {
            var user = result.resource;

            res.render('artists', { myArtists: user.topArtists });
        })
        .fail(function(error) {
            res.render('error', { title: 'Error occured', message: 'Error during reading User profile' });
        });
});


router.post('/step1', function(req, res, next) {
    var userId = req.cookies['user-id'];
    var checkedArtist = req.body['chosen[]'];
    usersDb
        .readProfile(userId)
        .then(function(result) {

            var userProfile = result.resource;

            for (var index = 0; index < userProfile.topArtists.length; index++) {
                userProfile.topArtists[index].notifiable = false;

                for (var j = 0; j < checkedArtist.length; j++) {
                    var artistId = checkedArtist[j];
                    if (artistId == userProfile.topArtists[index].id) {
                        userProfile.topArtists[index].notifiable = true;
                        break;
                    }
                }
            }

            usersDb
                .upsertProfile(userProfile)
                .then(function(result) {
                    console.log("Artists set");
                    res.end('{"success" : "Updated Successfully", "status" : 200}');
                })
                .fail(function(error) {
                    res.render('error', { title: 'Error occured', message: 'Error during saving User profile' });
                });
        })
        .fail(function(error) {
            res.render('error', { title: 'Error occured', message: 'Error during reading User profile' });
        });
});


router.get('/step2', function(req, res, next) {
    res.render('location', { title: 'Set location and radius' });
});

router.post('/step2', function(req, res, next) {
    var userId = req.cookies["user-id"];
    var position = req.body;
    usersDb
        .readProfile(userId)
        .then(function(result) {
            var userProfile = result.resource;
            userProfile.location = position;
            usersDb
                .upsertProfile(userProfile)
                .then(function(result) {
                    console.log(`Location set.`);
                })
                .fail(function(error) {
                    res.render('error', { title: 'Error occured', message: 'Error during saving User profile' });
                });
        })
        .fail(function(error) {
            res.render('error', { title: 'Error occured', message: 'Error during reading User profile' });
        });
});

module.exports = router;