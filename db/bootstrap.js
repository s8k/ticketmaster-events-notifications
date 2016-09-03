var config = require('../config');
var url = require('url');

var DocumentClient = require('documentdb-q-promises').DocumentClientWrapper;
var client = new DocumentClient(config.db.endpoint, { masterKey: config.db.key });

client
    .readDatabases()
    .toArrayAsync()
    .then(function (result) {
        var databases = result.feed;
        var database = null;

        for (var i = 0; i < databases.length; i++) {
            if (databases[i].id === config.db.id) {
                var database = databases[i];
                break;
            }
        }

        if (database === null) {
            console.log('Creating database');
            return client.createDatabaseAsync({ id: config.db.id });
        }

        console.log('Database found');
        console.log('Reading database');
        return client.readDatabaseAsync(database._self);
    })
    .then(function (databaseResponse) {
        var database = databaseResponse.resource;
        client
            .readCollections(database._self)
            .toArrayAsync()
            .then(function (result) {
                var collections = result.feed;
                var collectionToCreate = [ config.db.collections.users ];

                for (var i = 0; i < collections.length; i++) {
                    for (var j = 0; j < collectionToCreate.length; j++) {
                        if (collections[i].id === collectionToCreate[j]) {
                            var collectionId = collectionToCreate[j];
                            console.log(`Collection found ${collectionId}`);
                            collectionToCreate.splice(j, 1);                            
                        }
                    }
                }

                for (var j = 0; j < collectionToCreate.length; j++) {
                    createCollection(collectionToCreate[j]);
                }

                console.log('All collections are ready');
            })
            .fail(function (error) {
                console.log('An error occured in DocumentDB while accessing Collections', error);
            });;
    })
    .fail(function (error) {
        console.log('An error occured in DocumentDB while accessing Databases', error);
    });

function createCollection(collectionId) {
    console.log(`Creating collection ${collectionId}`);
    client
        .createCollectionAsync(database._self, { id: collectionId })
        .then(function (collectionResponse) {
            collection = collectionResponse.resource;
            console.log(`Collection created ${collectionId}`);
        });
}