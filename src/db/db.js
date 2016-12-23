const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'trip_raptor',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('You are now connected...');
});

module.exports = connection;
