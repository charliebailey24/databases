var models = require('../models');
console.log('MODELS::::', models);

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, users) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(users);
      }
    });
    //call users.getAll passing in the req and res

  },
  post: function (req, res) {}
};
