import React from 'react';

import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page from './Login';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with or without a name', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>
  );
  expect(getByTestId('title').textContent).toBe('DVLA Cloud Platform');
});
