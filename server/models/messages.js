var db = require('../db');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function () {
    //i: http request
    //o:

    // parse req for the info we're looking for
    // message text, user, roomname
    console.log('got to create');
    console.log('db.index.connection', db.index.connection);
  } // a function which can be used to insert a message into the database
};
