const Sequelize = require('sequelize');
// Create a database
const connection = new Sequelize('DB_NAME', 'DB_USERNAME', 'DB_PASSWORD', {
  hostname: 'DB_HOSTNAME',
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
