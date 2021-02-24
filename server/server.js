const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/api/...', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/.../:id', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/...', (req, res) => {
  res.send('Hello World!');
});

app.put('/api/...', (req, res) => {
  res.send('Hello World!');
});

app.delete('/api/...', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});