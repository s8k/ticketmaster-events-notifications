var config = require('../config');
var dbUtils = require('./utils')
var url = require('url');

var DocumentClient = require('documentdb-q-promises').DocumentClientWrapper;
var client = new DocumentClient(config.db.endpoint, { masterKey: config.db.key });
var databaseId = config.db.id;
var collectionId = config.db.collections.users;

var users = {};

users.upsertProfile = function (userData) {
    return client
        .upsertDocumentAsync(dbUtils.buildCollectionLink(databaseId, collectionId), userData);
};

users.readProfile = function (userId) {
    return client
        .readDocumentAsync(dbUtils.buildDocumentLink(databaseId, collectionId, userId));
};

users.readAllProfiles = function () {
    return client
        .readDocuments(dbUtils.buildCollectionLink(databaseId, collectionId));
};

module.exports = users;