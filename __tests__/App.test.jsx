import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/App';
import { render, screen } from '@testing-library/react';
// import { getQueriesForElement } from '@testing-library/dom';

// import '@testing-library/jest-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

test('renders the correct content', () => {
  const root = document.createElement('div');
  ReactDOM.render(<App />, root);

  expect(root.querySelector('h1').textContent).toBe('Hello!');
});
