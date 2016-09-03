var config = require('../config');
var dbUtils = require('./utils')
var url = require('url');

var DocumentClient = require('documentdb-q-promises').DocumentClientWrapper;
var client = new DocumentClient(config.db.endpoint, { masterKey: config.db.key });
var databaseId = config.db.id;
var collectionId = config.db.collections.users;

var users = {};

users.upsertProfile = function (userData) {
    client
        .upsertDocumentAsync(dbUtils.buildCollectionLink(databaseId, collectionId), userData)
        .then(function (result) {
            console.log(`User created ${userData.id}`);
        })
        .fail(function (error) {
            console.log('An error occured while inserting/updating User', error);
        });
};

module.exports = users;