const express = require('express');

const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const multer = require('multer');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const ATELIER_API_KEY = require('./config.js');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));
app.use(fileUpload());

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea',
  headers: {
    Authorization: `${ATELIER_API_KEY}`,
  },
};

app.get('/products/:product_id', (req, res) => {
  let { product_id } = req.params;

  axios
    .get(`${options.url}/products/${product_id}`, options)
    .then((results) => {
      res.send(results.data);
    })
    .catch(console.error);
});

//OVERVIEW
app.get('/products/:product_id/styles', (req, res) => {
  let { product_id } = req.params;

  axios
    .get(`${options.url}/products/${product_id}/styles`, options)
    .then((results) => {
      res.send(results.data);
    })
    .catch(console.error);
});

app.get('/products/:product_id/related', (req, res) => {
  let { product_id } = req.params;

  axios
    .get(`${options.url}/products/${product_id}/related`, options)
    .then((results) => {
      res.send(results.data);
    })
    .catch(console.error);
});

//REVIEWS
app.get('/reviews/:id/:expanded/:sort', (req, res) => {
  const { id, expanded, sort } = req.params;
  const lowerSort = sort.toLowerCase();
  let count;
  if (expanded === 'true') {
    count = 100;
  } else {
    count = 2;
  }
  axios
    .get(
      `${options.url}/reviews/?product_id=${id}&count=${count}&sort=${lowerSort}`,
      options,
    ).then(({ data }) => res.send(data.results))
    .catch((err) => console.log(err));
});

app.get('/reviews/meta/:id', (req, res) => {
  const { id } = req.params;
  axios
    .get(
      `${options.url}/reviews/meta/?product_id=${id}`,
      options,
    ).then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  axios.put(`${options.url}/reviews/${review_id}/helpful`, { body: {review_id: review_id } }, options)
    .then(() => res.send(204))
    .catch(console.log);
});

// Q&A
app.get('/qa/questions/:id/:expanded', (req, res) => {
  const { id, expanded } = req.params;
  // console.log(expanded);
  var count;
  if (expanded === 'true') {
    count = 100;
  } else {
    count = 2;
  }
  axios.get(`${options.url}/qa/questions/?product_id=${id}&count=${count}`, options)
    .then(({ data }) => {
      res.send(data.results);
    })
    .catch(console.log);
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const { question_id } = req.params;
  axios.put(`${options.url}/qa/questions/${question_id}/helpful`, { body: { question_id: question_id } }, options)
    .then(() => res.send(204))
    .catch(console.log);
});

app.post('/qa/questions', (req, res) => {
  axios.post(`${options.url}/qa/questions`, req.body, options)
    .then(() => {
      res.send(201);
    })
    .catch(console.log);
});

app.post(`/qa/questions/:question_id/answers`, (req, res) => {
  const { question_id } = req.params;
  console.log(req.body);
  // const file = req.files.file;
  // file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send(err);
  //   }
  // });

  axios.post(`${options.url}/qa/questions/${question_id}/answers`, req.body, options)
    .then(() => res.send(201))
    .catch(console.log);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
