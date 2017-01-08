var config = {
  // database
  database: {
    // con string
    // mongo db
    // localhost
    // 27017
    // db name
    connectionString: "mongodb://my-crud-express-mongodb:my-crud-express-mongodb@ds157298.mlab.com:57298/my-crud-express-mongodb",
    // db name
    databaseName: "my-crud-express-mongodb"
  },
  
  // debug
  debug: {
    // database
    database: {
      // 
      connectionString: "mongodb://my-crud-express-mongodb:my-crud-express-mongodb@ds157298.mlab.com:57298/my-crud-express-mongodb",
      databaseName: "my-crud-express-mongodb_dev"
    }
  }
};

module.exports = config;

