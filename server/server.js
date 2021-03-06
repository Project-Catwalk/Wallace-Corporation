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

const storage = multer.diskStorage({
  destination: '../public/uploads',
  fileName: function(req, file, cb) {
    cb(null, 'test');
  }
});

const upload = multer({
  storage: storage
}).single('photo');
// app.use(upload.single('email'));

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
app.get('/reviews/sort/:id/:sort', (req, res) => {
  const { id, sort } = req.params;
  const lowerSort = sort.toLowerCase();
  const reviewsURL = `${options.url}/reviews/?product_id=${id}&count=100&sort=${lowerSort}`;
  axios
    .get(reviewsURL, options)
    .then(({ data }) => res.send(data.results))
    .catch((err) => console.log(err));
});

app.get('/reviews/meta/:id', (req, res) => {
  const { id } = req.params;
  const metaReviewsURL = `${options.url}/reviews/meta/?product_id=${id}`;
  axios
    .get(metaReviewsURL, options)
    .then(({ data }) => res.send(data))
    .catch((err) => console.log(err));
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  const { review_id } = req.params;
  axios.put(`${options.url}/reviews/${review_id}/helpful`, { body: { review_id } }, options)
    .then(() => res.send(204))
    .catch(console.log);
});

app.put('/reviews/:review_id/report', (req, res) => {
  const { review_id } = req.params;
  axios.put(`${options.url}/reviews/${review_id}/report`, { body: { review_id: review_id } }, options)
    .then(() => res.send(204))
    .catch(console.log);
});

// Q&A
app.get('/qa/questions/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${options.url}/qa/questions/?product_id=${id}&count=100`, options)
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

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const { answer_id } = req.params;
  axios.put(`${options.url}/qa/answers/${answer_id}/report`, { body: { answer_id: answer_id } }, options)
    .then(() => res.send(204))
    .catch(console.log);
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const { question_id } = req.params;
  axios.put(`${options.url}/qa/questions/${question_id}/report`, { body: { question_id: question_id } }, options)
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
  const { photo } = req.files;
  photo.mv(`../public/uploads/${photo.name}`, err => {
    if (err) {
      console.log(err);
    }
  });
  upload(req, res, (err) => {
    if (err) {
      console.log(error);
    } else {
      res.send(201);
    }
  });


  // axios.post(`${options.url}/qa/questions/${question_id}/answers`, req.body, options)
  //   .then(() => res.send(201))
  //   .catch(console.log);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
