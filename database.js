// config contains prod and dev db detail
var config = require("./config");

// mongoose
var mongoose = require("mongoose");

// e.g. DEBUG=true node run.js
var connectionString = process.env.DEBUG === "true" ?
  // not easy to get debug
  // config debug database connection str 
  config.debug.database.connectionString :
  
  //
  config.database.connectionString;

// mongoose connect
mongoose.connect(connectionString);

// on connected
mongoose.connection.on("connected", function() {
  console.log("Connected to " + connectionString);
});

// on error
mongoose.connection.on("error", function(error) {
  console.log("Connection to " + connectionString + " failed:" + error);
});

// on disconnect
mongoose.connection.on("disconnected", function() {
  console.log("Disconnected from " + connectionString);
});

// kill
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Disconnected from " + connectionString + " through app termination");
    process.exit(0);
  });
});

