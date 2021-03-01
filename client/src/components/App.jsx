import React from "react";
import QA from "./QA.jsx";
import axios from "axios";
import Reviews from "./Reviews.jsx";
import Overview from "./Overview.jsx";

const titleBarStyle = {
  backgroundColor: '#6D8C8C',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      questions: [],
      reviews: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getQuestions(20103);
    this.getReviews(20103);
  }

  getQuestions(id) {
    axios.get(`/qa/questions/${id}`)
      .then((results) => {
        this.setState({
          questions: results.data,
        });
      })
      .catch(console.log);
  }

  getReviews(id) {
    axios.get(`/reviews/${id}`)
      .then((results) => {
        this.setState({
          reviews: results.data,
        });
      })
      .catch(console.log);
  }

  defaultProduct(productId) {
    axios
      .get(`/products/${productId}`)
      .then((results) => {
        this.setState({ id: results.data.id });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  render() {
    const { reviews, questions } = this.state;
    return (
      <div>
        <h1 style={titleBarStyle}>Hello!</h1>
        <Overview />
        <Reviews reviews={reviews} />
        <QA questions={questions} />
      </div>
    );
  }
}

export default App;
