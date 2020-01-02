import React from 'react';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with or without a name', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>
  );
  expect(getByTestId('title').textContent).toBe('Dashboard');
});
