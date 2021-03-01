const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const morgan = require('morgan');
const ATELIER_API_KEY = require('./config.js');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea',
  headers: {
    Authorization: `${ATELIER_API_KEY}`,
  },
};

app.get('/products/:products_id', (req, res) => {
  let { products_id } = req.params;

  axios
    .get(`${options.url}/products/${products_id}`, options)
    .then((results) => {
      res.send(results.data);
    })
    .catch(console.error);
});

app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  axios
    .get(
      `${options.url}/reviews/?product_id=${id}`,
      options,
    ).then(({ data }) => res.send(data.results))
    .catch((err) => console.log(err));
});

// Q&A
app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}/qa/questions/?product_id=${id}`, options)
    .then(({ data }) => {
      res.send(data.results);
    })
    .catch(console.log);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
