import React from 'react';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with or without a name', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  expect(getByTestId('active breadcrumb').textContent).toBe('Home');
});
