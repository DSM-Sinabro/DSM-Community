let mongoose = require('mongoose');
let database = {};
let config = require('./config');

let sprintf = require('sprintf-js').sprintf;

database.init = function (app, config) {
    connect(app, config);
}

function connect(app) {

    mongoose.Promise = global.Promise;
    mongoose.connect(config.db_url);
    database.connection = mongoose.connection;
    database.connection.on('error', console.error.bind(console, 'mongoose connection error.'));
    database.connection.on('open', function () {
        console.log('데이터베이스에 연결되었습니다. : ' + config.db_url);

        init(app, config);

    });
    database.connection.on('disconnected', () => {
        connect(app)
    });
}

function init(app) {
    console.log(sprintf("\n\n%15s | %-15s", "modelName","collection"));
    console.log("----------------------------------")

    for (var i = 0; i < config.db_schemas.length; i++) {
        let schemaInfo = config.db_schemas[i];
        let model = require(schemaInfo.file);
        let modelName = schemaInfo.modelName;
        database[modelName] = model;
        console.log(sprintf("%15s | %-15s", modelName, model.collection.name));
    }
    console.log("\n");
    app.set('db', database);
}

module.exports = database;