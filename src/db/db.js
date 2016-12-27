const Sequelize = require('sequelize');
// Create a database
const connection = new Sequelize('trip_raptor', 'root', '1234');

// example table name 'location'
const location = connection.define('location', {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
});

connection
  .sync({ force: true })
  .then((err) => {
    console.log('Connected to DB');
  }, (err) => {
    console.log('An error occurred while creating the table:', err);
  });

module.exports = connection;
