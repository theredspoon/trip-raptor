const Sequelize = require('sequelize');
// Create a database
const connection = new Sequelize('trip_raptor', 'root', '1234');

// example table name 'location'
const location = connection.define('location', {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
});

connection.sync().then(() => {
  console.log('Connected to DB');
});

module.exports = connection;
