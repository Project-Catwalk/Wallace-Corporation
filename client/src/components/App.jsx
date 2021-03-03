import React from 'react';
import axios from 'axios';
import QA from './qa/QA';
import Reviews from './reviews/Reviews';
import Overview from './overview/Overview';
import StarRating from './StarRating';

const titleBarStyle = {
  backgroundColor: '#6D8C8C',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      questions: [],
      reviews: [],
      overview: [],
      styles: [],
      metaReviews: [],
      related: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getStyles(20103);
    this.getQuestions(20103);
    this.getReviews(20103);
    this.getMetaReviews(20103);
    this.getRelated(20103);
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
      .then(({ data }) => {
        this.setState({
          reviews: data,
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

  getMetaReviews(id) {
    axios.get(`/reviews/meta/${id}`)
      .then(({ data }) => {
        this.setState({ metaReviews: data });

  getRelated(id) {
    axios.get(`/products/${id}/related`)
      .then((results) => {
        this.setState({
          related: results.data,
        });

      })
      .catch(console.log);
  }

  defaultProduct(productId) {
    axios
      .get(`/products/${productId}`)
      .then((results) => {

        this.setState({
          id: results.data.id,
          name: results.data.name,
          overview: results.data,
        });

        this.setState({ id: results.data.id });
        this.setState({ overview: results.data });
        console.log('state: ', this.state);

      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  render() {
    const {

      reviews, questions, id, overview, styles, name, metaReviews

      reviews, questions, id, overview, styles, related,

    } = this.state;

    return (
      <div>
        <h1 style={titleBarStyle}>Hello!</h1>

        <Overview overview={overview} productStyles={styles} />
        <Reviews
          reviews={reviews}
          getReviews={this.getReviews}
          productId={id}
          name={name}
          metaReviews={metaReviews}
        />

        <Overview overview={overview} productStyles={styles} relatedProducts={related} />
        <Reviews reviews={reviews} />

        <QA productId={id} getQuestions={this.getQuestions} questions={questions} />
      </div>
    );
  }
}

export default App;
