// const sum = require('../client/src/components/App.jsx');
// // import sum from '../client/src/components/App';


// test('component shoulder render', () => {
//   expect(sum(1, 2)).toBe(3);
// });


import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App Test Suite', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });


});