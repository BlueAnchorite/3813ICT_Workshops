var mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://blueanchorite-projects-3813ict-6250095:27017/mydb';

// Database Name
const dbName = 'mydb';

var connection;

// Use connect method to connect to the server
MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) throw err;
    connection = db;
    var dbo = db.db('mydb');
    console.log("Connected successfully to database " + dbo.databaseName);

    dbo.listCollections().toArray(function(err, collInfos) {
        if (err) throw err;
        console.log(collInfos);
    });
    
    dbo.listCollections({name: "products"}).hasNext(function(err, collinfo) {
        if (err) throw err;
        if (collinfo) {
            dbo.dropCollection("products", function(err, delOK) {
               if (err) throw err;
               if (delOK) console.log("Collection deleted");
            });
        }
    });

    require('./create.js')(dbo);
    require('./add.js')(dbo);
    require('./remove.js')(dbo);
    require('./update.js')(dbo);
    require('./read.js')(dbo);
    
});

process.on('SIGINT', function() {
    
  connection.close(function () {
    console.log('MongoDB disconnected on app termination');
    process.exit(0);
  });
});