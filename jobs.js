var schedule = require('node-schedule');
var usersDb = require('./db/users');
var ticketmaster = require('./ticketmaster');

// Main notifications sender job
var j = schedule.scheduleJob('*/1 * * * *', function() {
    usersDb
        .readAllProfiles()
        .toArrayAsync()
        .then(function(result) {
            var users = result.feed;
            users.forEach(function(u) {
                //                u.topArtists.forEach(function (a) {
                // ticketmaster
                //     .getEventsByArtistAndLocation(u.location.latitude, u.location.longitude, u.location.radius, a.name)
                //     .then(function (result) {
                u.notifications = u.notifications ? u.notifications : [];
                u.notifications.push("Shura has a concert on December, 7 in London. <a href='http://www.ticketmaster.co.uk/shura-london-07-12-2016/event/1F0050DD98F540CA?artistid=2039422&majorcatid=10001&minorcatid=1'>See the event</a>");
                usersDb
                    .upsertProfile(u)
                    .fail(function(error) {
                        console.log('Error occured while pushing notification');
                    });
                //     })
                //     .fail(function (error) {
                //         console.log(`Error occured while reading user profile: ${u.id}`);
                //     });
                //              }, this);
            }, this);
        })
        .fail(function(error) {
            console.log('Error occured while reading all profiles');
        });

    console.log('Job triggered!');
});

module.exports = j;