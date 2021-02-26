const express = require("express");

const app = express();
const port = 3000;
const axios = require("axios");
const path = require("path");
const morgan = require("morgan");
const ATELIER_API_KEY = require("./config.js");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(morgan("dev"));

let options = {
  url: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea",
  headers: {
    Authorization: `${ATELIER_API_KEY}`,
  },
};

app.get("/products", (req, res) => {
  
  axios
    .get(`${options.url}/products`, options)
    .then((results) => {
      console.log(results.data);
    })
    .catch(console.error);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
