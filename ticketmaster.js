var requestify = require('requestify');
var config = require('./config');

var ticketmaster = {};

ticketmaster.getEventsByArtistAndLocation = function (lat, long, radius, keyword) {
    requestify.request(
        'https://app.ticketmaster.com/discovery/v2/events.json?apikey=' + config.tm.clientId + '&' +
        'latlong=' + lat + ',' + long + '&' +
        'radius=' + radius + '&' +
        'unit=miles' + '&' +
        'endDateTime=' + encodeURIComponent('2017-01-01T00:00:00Z'), {
        method: 'GET'
    })
    .then(function (response) {
        var events = response.getBody();
    })
    .fail(function (repsonse) {
        console.log('Error occured while communicating to TicketMaster');
    });
};

module.exports = ticketmaster;