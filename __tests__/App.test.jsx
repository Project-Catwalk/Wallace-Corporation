import React from 'react';
import axiosMock from 'axios';
import axios from 'axios';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import App from '../client/src/components/App';
import Helpful from '../client/src/components/Helpful';
// import 'jest-dom/extend-expect';
// jest.mock('axios');

// afterEach(cleanup);

// axios.put('https://jsonplaceholder.typicode.com/albums');
let url = '';
let body = {};

jest.mock("axios", () => ({
  put: jest.fn((_url, _body) => {
    return new Promise((resolve, reject) => {
      url = _url
      body = _body
      resolve(true)
      reject(false)
    })
  }),
  get: jest.fn((_url) => {
    return new Promise((resolve, reject) => {
      url = _url
      resolve(true)
      reject(false)
    })
  }),
}));

it('renders the correct logo', () => {
  // const root = document.createElement('div');
  const { getByTestId } = render(<App />);
  expect(getByTestId('logo').textContent).toBe('Hello!');
});

it('fetches and displays data', async () => {
  const { getByTestId } = render(<App />);
});

describe('Helpful Component', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(<Helpful />);
    expect(queryByTestId('helpful-count')).toBeTruthy();
  });

  it('Should increase the helpfulness count', () => {
    const { queryByTestId } = render(<Helpful review_id="11111" />);
    const count = queryByTestId('helpful-count').textContent;
    const helpfulButton = queryByTestId('helpful-button');
    fireEvent.click(helpfulButton);
    const newCount = queryByTestId('helpful-count').textContent;
    expect(Number(newCount)).toBe(Number(count) + 1);
  });

  it('Should make a successful put request to the API with a review id', () => {
    const { queryByTestId } = render(<Helpful review_id="11111" />);
    const count = queryByTestId('helpful-count').textContent;
    const helpfulButton = queryByTestId('helpful-button');
    fireEvent.click(helpfulButton)
    expect(axios.put).toHaveBeenCalledTimes(1);
  });

  it('Should make a successful put request to the API with a question id', () => {
    const { queryByTestId } = render(<Helpful question_id="11111" />);
    const count = queryByTestId('helpful-count').textContent;
    const helpfulButton = queryByTestId('helpful-button');
    fireEvent.click(helpfulButton)
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
  
  it('Should be able to change button from "Report" to "Reported upon click', () => {
    const { queryByTestId } = render(<Helpful />);
    const reportButton = queryByTestId('report-button');
    fireEvent.click(reportButton);
    expect(reportButton.textContent).toBe('Reported');
  });

  it('Should be able to report a review', () => {
    const { queryByTestId } = render(<Helpful review_id='11111'/>);
    const reportButton = queryByTestId('report-button');
    fireEvent.click(reportButton);
    expect(axios.put).toHaveBeenCalledTimes(1);
  });

  it('Should be able to report an answer', () => {
    const { queryByTestId } = render(<Helpful answer_id='22222'/>);
    const reportButton = queryByTestId('report-button');
    fireEvent.click(reportButton);
    expect(axios.put).toHaveBeenCalledTimes(1);
  });

  it('Should be able to report a question', () => {
    const { queryByTestId } = render(<Helpful question_id='22222' />);
    const reportButton = queryByTestId('report-button');
    fireEvent.click(reportButton);
    expect(axios.put).toHaveBeenCalledTimes(1);
  });

  it('Should properly display helpfulness count', () => {
    const { queryByTestId } = render(<Helpful helpfulness="7" />);
    const count = queryByTestId('helpful-count').textContent;
    expect(count).toBe('(7) ');
  });
});

/*                  OVERVIEW TESTS                   */

