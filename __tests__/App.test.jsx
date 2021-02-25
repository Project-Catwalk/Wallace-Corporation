// import React from 'react';
// import '@testing-library/jest-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import App from '../client/src/components/App.jsx';

// test('component shoulder render', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from '../client/src/components/App.jsx';

describe('App', () => {
    test('renders App component', () => {
        render(<App />);
        screen.getByText('Hello!');
    });
});