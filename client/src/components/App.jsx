import React from 'react';
import axios from 'axios';
import QA from './qa/QA';
import Reviews from './reviews/Reviews';
import Overview from './overview/Overview';
import StarRating from './StarRating';
import style from '../styleComponents/App.module.css';

const titleBarStyle = {
  backgroundColor: '#6D8C8C',
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      overview: [],
      styles: [],
      related: [],
      reviewRating: 0,
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRelated = this.getRelated.bind(this);
    this.handleReviewAverage = this.handleReviewAverage.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getStyles(20103);
    this.getRelated(20103);
  }

  handleReviewAverage(average) {
    this.setState({ reviewRating: average });
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
      id, overview, styles, name, related, reviewRating,
    } = this.state;

    return (
      (id, overview, styles, name, related)
        ? (
          <div>
            <h1 data-testid="logo" style={titleBarStyle}>Hello!</h1>
            <Overview
              overview={overview}
              productStyles={styles}
              relatedProducts={related}
              average={reviewRating}
            />
            <QA productId={id} />
            <Reviews
              productId={id}
              name={name}
              handleReviewAverage={this.handleReviewAverage}
            />
          </div>
        )
        : null
    );
  }
}

export default App;
