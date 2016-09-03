var config = require('../config');
var usersDb = require('../db/users');
var requestify = require('requestify');
var express = require('express');
var router = express.Router();

router.get('/spotify', function (req, res, next) {
    res.redirect('https://accounts.spotify.com/authorize?' +
        'client_id=' + config.spotify.clientId + '&' +
        'response_type=' + 'code' + '&' +
        'redirect_uri=' + encodeURIComponent(config.spotify.callbackUrl) + '&' +
        'scope=' + encodeURIComponent('user-top-read user-read-email'));
});

router.get('/spotify/callback', function (req, res, next) {
    var authCode = req.query['code'];

    obtainToken(authCode)
        .then(function (response) {
            var token = response.getBody();

            getUserProfile(token)
                .then(function (response) {
                    console.log('User signed in: ' + response.body);

                    var userRaw = response.getBody();
                    var userProfile = mapUserProfile(userRaw);

                    getUsersTopArtists(token)
                        .then(function (response) {
                            console.log('Top artists: ' + response.body);

                            var topArtistsRaw = response.getBody();
                            var topArtists = topArtistsRaw.items.map(mapTopArtist);
                            userProfile.topArtists = topArtists;
                            usersDb
                                .upsertProfile(userProfile)
                                .then(function (result) {
                                    console.log(`User created ${userProfile.id}`);
                                    res.cookie('user-id', userProfile.id);
                                    res.redirect('/wizard/step1');
                                })
                                .fail(function (error) {
                                    res.render('error', { title: 'Error occured', message: 'Error during saving User profile' });
                                });
                        })
                        .fail(function (response) {
                            res.render('error', { title: 'Error occured', message: response.getBody() });
                        });
                })
                .fail(function (response) {
                    res.render('error', { title: 'Error occured', message: response.getBody() });
                });
        })
        .fail(function (response) {
            res.render('error', { title: 'Error occured', message: response.getBody() });
        });
});

function obtainToken(authCode) {
    return requestify.request('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: {
            grant_type: 'authorization_code',
            code: authCode,
            redirect_uri: config.spotify.callbackUrl
        },
        headers: {
            'Authorization': 'Basic ' + new Buffer(config.spotify.clientId + ':' + config.spotify.cliendSecret).toString('base64')
        },
        dataType: 'form-url-encoded'
    });
}

function getUserProfile(token) {
    return requestify.request('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.access_token
        }
    });
}

function getUsersTopArtists(token) {
    return requestify.request('https://api.spotify.com/v1/me/top/artists?limit=15', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token.access_token
        }
    });
}

function mapUserProfile(userRaw) {
    var userProfile = {};
    userProfile.id = userRaw.id;
    userProfile.email = userRaw.email;
    userProfile.external_urls = userRaw.external_urls;

    return userProfile;
}

function mapTopArtist(artistRaw) {
    var artist = {};
    artist.id = artistRaw.id;
    artist.name = artistRaw.name;
    artist.notifiable = true;
    artist.popularity = artistRaw.popularity;
    artist.genres = artistRaw.genres;
    artist.external_urls = artistRaw.external_urls;
    artist.images = artistRaw.images;

    return artist;
}

module.exports = router;
