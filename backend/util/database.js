const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://project_user:bgt55tgb@cluster0.qdmbx.mongodb.net?retryWrites=true&writeConcern=majority";

const client = new MongoClient(uri);
dbClient.connect();
module.exports = client;