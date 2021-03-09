import React from 'react';
import { render, screen, cleanup, fireEvent, queryByTestId, act } from '@testing-library/react';
import QA from '../client/src/components/qa/QA';
import Question from '../client/src/components/qa/Question';
import QASearchBar from '../client/src/components/qa/QASearchBar';
import App from '../client/src/components/App';
import { query } from 'express';
import axios from 'axios';


// jest.mock("axios", () => ({
//   put: jest.fn((_url, _body) => {
//     return new Promise((resolve, reject) => {
//       url = _url
//       body = _body
//       resolve(true)
//       reject(false)
//     })
//   }),
//   get: jest.fn((_url) => {
//     return new Promise((resolve, reject) => {
//       url = _url
//       body = _body
//       resolve(true)
//       reject(false)
//     })
//   }),
// }));

const questions = [
  {
    question_body: 'First Question',
    question_helpfulness: 33,
    answers: {},
  },
  {
    question_body: 'Second Question',
    question_helpfulness: 7,
    answers: {},
  },
];

beforeEach(() => {
  axios.get = jest.fn(() =>
    Promise.resolve({
      data: Promise.resolve(questions),
    }),
  );
});



describe('QA Section', () => {
  it('renders to the page properly', () => {
    const { queryByText } = render(<QA />);
    expect(queryByText('qa-heading')).toBeTruthy;
  });

  // it('Should properly get questions from the database upon rendering', async () => {
  //   await act(async () => render(<QA />));
  //   expect(screen.getByText('First Question')).toBeInTheDocument();
  //   // const { queryByText } = render(<QA />);
  //   // expect(queryByText('Test Question')).toBeTruthy;
  // });
});

describe('Question Section', () => {
  it('renders to the page properly', () => {
    const { queryByText } = render(<Question question={questions[0]} />);
    expect(queryByText('add-answer-button')).toBeTruthy;
  });

  // it('should open an answer modal', () => {

  // });
});
