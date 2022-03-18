var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// create the connection to database
//

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;

// module.exports = {

//   connection: function(callback) {
//     console.log('made it to db connection');

//     // assign to variable
//     var myConnection = mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       database: 'chat'
//     });

//     myConnection.execute('INSERT into messages VALUES(?, ?, ?)', ['user', 'message_text', ''], (err, results, fields) => {
//       console.log(fields);
//       console.log(results);
//     });


//     //execute the connection passing in table

//   }
// };
