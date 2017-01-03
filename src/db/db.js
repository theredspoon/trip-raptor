const Sequelize = require('sequelize');
// Create a database
const connection = new Sequelize('trip_raptor', 'team', 'tripraptor', {
  hostname: '107.178.219.90',
  dialect: 'mysql',
});


connection
  .sync({ force: true })
  .then((err) => {
    console.log('Connected to DB');
  }, (err) => {
    console.log('An error occurred while creating the table:', err);
  });

module.exports = connection;
