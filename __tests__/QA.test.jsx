import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import QA from '../client/src/components/qa/QA';
import QASearchBar from '../client/src/components/qa/QASearchBar';
import MockedApp from '../client/src/components/App';
import App from '../client/src/components/App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<QA />, div);
// });

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

describe('App', () => {
  test('renders App Component', () => {
    render(<App />);
    screen.getByText('Hello!');
  });
});

// it('Should contain the heading "Questions & Answers', () => {
//   const questions = [
//     {
//       answers: {},
//       question_body: 'How\'s it going?',
//     },
//   ];
//   const display = render(<QA questions={questions} />);
//   display.getByRole('heading', {name: /questions & answers/i });
//   expect(heading).toBe('Questions & Answers');
// });
// it("renders with or without a name", () => {
//   act(() => {
//     ReactDOM.render(<p>Hey, stranger</p>, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");
// });
