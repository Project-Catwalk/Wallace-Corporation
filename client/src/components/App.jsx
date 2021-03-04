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
      overview: [],
      styles: [],
      related: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRelated = this.getRelated.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20101);
    this.getStyles(20101);
    this.getRelated(20101);
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
      questions, id, overview, styles, name, related,
    } = this.state;

    return (
      <div>
        <h1 style={titleBarStyle}>Hello!</h1>
        <Overview overview={overview} productStyles={styles} relatedProducts={related} />
        <Reviews
          productId={id}
          name={name}
        />
        <QA productId={id} getQuestions={this.getQuestions} questions={questions} />
      </div>
    );
  }
}

export default App;
