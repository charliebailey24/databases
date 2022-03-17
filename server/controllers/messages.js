var models = require('../models');

module.exports = {
// a function which handles a get request for all messages
  get: function (req, res) {
    //i: http request obj
    //o:

  },


  // pass req and response all the the way through
  post: function (req, res) {
    //i: http request obj
    //o: passing the request and reponse to models/messages.js
    //c: none
    //e: there is an error posting data

    models.messages.create();


  } // a function which handles posting a message to the database
};
