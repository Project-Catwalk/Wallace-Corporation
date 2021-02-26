const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');
const ATELIER_API_KEY = require('./config/config.js');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));

app.get('/products/:product_id', (req, res) => {
  let options = {
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products`,
    method: "GET",
    headers: {
      "User-Agent": "request",
      Authorization: `${ATELIER_API_KEY}`,
    },
  };

  axios(options)
    .then((results) => {
      res.send(results);
    })
    .catch(console.error);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
