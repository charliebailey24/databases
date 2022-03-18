var db = require('../db');
// console.log('db:::', db);

module.exports = {
  getAll: function (callback) {
    console.log('in getAll');
    // bring in the connection to the database from db index.js

    var query = 'SELECT * FROM users';
    db.connection.query(query, (err, users) => {
      if (err) {
        callback(err);
      } else {
        callback(null, users);
        console.log('USERS::::', users);
      }
    });

  },



  create: function () {}
};

