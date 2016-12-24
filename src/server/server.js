const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const env = app.get('env') == 'development' ? 'dev' : app.get('env');
const port = process.env.PORT || 4321;
app.set('port', port);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    console.log('Server not connected');
  }
  console.log('Listening on port', port);
});
