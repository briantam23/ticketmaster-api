const express = require('express');
const app = express();
const path = require('path');


app.use('/public', express.static(path.join(__dirname, '../public')));                      //serves up public files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));     //servers up index.html file


module.exports = app;