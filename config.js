var config = {};

config.spotify = {
    clientId: '24de3f695f4b427ab719fb9cf84f1518',
    clientSecret: '1750923bb05a422e96636619add5c997',
    callbackUrl: 'http://tickets-notify.azurewebsites.net/signin/spotify/callback'
};

config.tm = {
    clientId: 'IJ5f9Esalq48QebA7t8ENydSGQAGhVIu',
    clientSecret: 'oTMGdDSnnekswaUM',
    callbackUrl: 'http://tickets-notify.azurewebsites.net/signin/lastfm/callback'
};

config.db = {
    endpoint: 'https://ticketmaster-db.documents.azure.com:443/',
    key: 'jfUzukUCpGGl6MojawXnUCjxoGn4ZL1sg8TWH2Kl0LIQDbT4Z17Z9QXss4afoKjTqlOow0OoYU5ns3rVD0EsxQ==',
    id: 'EventificationDb',
    collections: {
        users: 'Users'
    }
};

module.exports = config;