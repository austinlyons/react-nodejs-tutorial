// server.js
'use strict';

const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = app.listen(9000, () => {
  let port = server.address().port;
  console.log(`Server running at http://localhost:${port}`);
});
