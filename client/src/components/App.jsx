import React from "react";
import QA from "./QA.jsx";
import axios from "axios";
import Reviews from "./Reviews.jsx";
import Overview from "./Overview.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      questions: [],
    };

    this.defaultProduct = this.defaultProduct.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.defaultProduct(20103);
    this.getQuestions(20103);
  }

  getQuestions(id) {
    axios.get(`/qa/questions/${id}`)
      .then((results) => {
        this.setState({
          questions: results.data,
        });
      })
      .catch(console.log);
  };

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
    const { id, questions } = this.state;
    return (
      <div>
        <h1>Hello!</h1>
        <Overview />
        <Reviews productId={id} />
        <QA questions={questions} />
      </div>
    );
  }
}

export default App;
