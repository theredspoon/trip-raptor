const express = require('express');
const db = require('./db/db.js');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

db.connect(db.MODE_PRODUCTION, (err) => {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  } else {
    app.listen(4321, () => {
      console.log('Listening on port 4321...');
    });
  }
});

