var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('location', { title: 'Set location and radius' });
});

var usersDb = require('../db/users');
router.post('/', function (req, res, next) {
	var id = req.cookies["user-id"];
	var position = req.body;
    var profile = usersDb.getProfile(id);
    profile.preferences.location = JSON.parse(req.body);
    usersDb.upsertProfile(profile);
});

module.exports = router;