const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});