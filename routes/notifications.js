var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('notifications', { title: 'Notifications' });
});

router.post('/poll', function(req, res, next) {
	var lastPolledDateTime = req.body.last; // as string
	res.send({ // get actual data
		notifications: ['Notification! ' + lastPolledDateTime],
	});
});

module.exports = router;