import React from 'react';
import QA from './QA.jsx';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import Overview from './Overview.jsx';



// Functional React Component:

const App = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Overview />
      <QA />
      <Reviews /> 
    </div>
  );
}

// Class-Based React Component:

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       thing: '',
//       stuff: ''
//     }
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello!</h1>
//       </div>
//     )
//   }
// }

export default App;
