import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import Overview from '../client/src/components/overview/Overview';
import { render, screen } from '@testing-library/react';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// it("renders with or without a name", () => {
//   render(<Overview />, container);
//   expect(container.textContent).toBe("Hey, stranger");

//   render(<Overview name="Jenny" />, container);
//   expect(container.textContent).toBe("Hello, Jenny!");

//   render(<Overview name="Margaret" />, container);
//   expect(container.textContent).toBe("Hello, Margaret!");
// });
