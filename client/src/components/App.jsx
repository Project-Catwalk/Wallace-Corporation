import React from 'react';
import axios from 'axios';
import QA from './qa/QA';
import Reviews from './reviews/Reviews';
import Overview from './overview/Overview';

const titleBarStyle = {
  backgroundColor: '#6D8C8C',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      questions: [],
      reviews: [],
      overview: [],
      styles: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getStyles(20103);
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

  getStyles(id) {
    axios.get(`/products/${id}/styles`)
      .then((results) => {
        this.setState({
          styles: results.data.results,
        });
      })
      .catch(console.log);
  }

  defaultProduct(productId) {
    axios
      .get(`/products/${productId}`)
      .then((results) => {
        this.setState({ id: results.data.id });
        this.setState({ overview: results.data });
        // console.log('state: ', this.state);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  render() {
    const {
      reviews, questions, id, overview, styles,
    } = this.state;

    return (
      <div>
        <h1 style={titleBarStyle}>Hello!</h1>
        <Overview overview={overview} productStyles={styles} />
        <Reviews reviews={reviews} />
        <QA productId={id} getQuestions={this.getQuestions} questions={questions} />
      </div>
    );
  }
}

export default App;
