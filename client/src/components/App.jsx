import React from 'react';
import QA from './QA.jsx';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import Overview from './Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ''
    };

    this.defaultProduct = this.defaultProduct.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
  }

  defaultProduct(productId) {
    axios
      .get(`/products/${productId}`)
      .then((results) => {
        this.setState({id: results.data.id});
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    return (
      <div>
        <Overview />
        <Reviews />
        <QA />
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default App;
