var config = {};

config.spotify = {
    clientId: '24de3f695f4b427ab719fb9cf84f1518',
    cliendSecret: '1750923bb05a422e96636619add5c997',
    callbackUrl: 'http://localhost:3000/signin/spotify/callback'
};

config.lastfm = {
    clientId: 'c8194525e29b50a2db508253ec72e6e1',
    cliendSecret: '<hidden>',
    callbackUrl: 'http://localhost:3000/signin/lastfm/callback'
};

config.db = {
    endpoint: 'https://ticketmaster-db.documents.azure.com:443/',
    key: 'jfUzukUCpGGl6MojawXnUCjxoGn4ZL1sg8TWH2Kl0LIQDbT4Z17Z9QXss4afoKjTqlOow0OoYU5ns3rVD0EsxQ==',
    name: 'EventificationDb',
    collections: {
        users: 'Users'
    }
};

module.exports = config;