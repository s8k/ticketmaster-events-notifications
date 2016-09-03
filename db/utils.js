var utils = {};

utils.buildDatabaseLink = function (databaseId) {
    return `dbs/${databaseId}`;
};

utils.buildCollectionLink = function (databaseId, collectionId) {
    return `dbs/${databaseId}/colls/${collectionId}`;
};

utils.buildDocumentLink = function (databaseId, collectionId, documentId) {
    return `dbs/${databaseId}/colls/${collectionId}/docs/${documentId}`;
};

module.exports = utils;