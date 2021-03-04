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
      reviews: [],
      overview: [],
      styles: [],
      metaReviews: [],
      characteristics: [],
      related: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    // this.getQuestions = this.getQuestions.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {

    this.defaultProduct(20101);
    this.getStyles(20101);
    this.getReviews(20101);
    this.getMetaReviews(20101);
    this.getRelated(20101);
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
        this.setState({
          metaReviews: Object.entries(data.characteristics),
        });
      })
      .catch((err) => console.log(err));
  }

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
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }

  render() {
    const {
      reviews, questions, id, overview, styles, name, metaReviews, related, characteristics
    } = this.state;

    return (
      <div>
        <h1 style={titleBarStyle}>Hello!</h1>
        <Overview overview={overview} productStyles={styles} relatedProducts={related} />
        <Reviews
          reviews={reviews}
          getReviews={this.getReviews}
          productId={id}
          name={name}
          metaReviews={metaReviews}
          characteristics={characteristics}
        />
        <QA productId={id} getQuestions={this.getQuestions} questions={questions} />
      </div>
    );
  }
}

export default App;
