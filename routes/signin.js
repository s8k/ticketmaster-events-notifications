var config = require('../config');
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
                    var profile = response.getBody();
                    res.send('Id: ' + profile.id + ' Email: ' + profile.email);
                })
                .fail(function (response) {
                    res.send(response.getBody());
                });
        })
        .fail(function (response) {
            res.send(response.getBody());
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

module.exports = router;
