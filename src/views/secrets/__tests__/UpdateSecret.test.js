import React from 'react';

import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Page from '../UpdateSecret';

// eslint-disable-next-line jest/expect-expect
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Page match={{ params: { name: '/asdfasd' } }} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with or without a name', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Page match={{ params: { name: '/asdfasd' } }} />
    </MemoryRouter>
  );
  expect(getByTestId('title').textContent).toBe('Kubernetes Secrets');
});

it('check validation', async () => {
  const { getByLabelText, findByTestId } = render(
    <MemoryRouter>
      <Page match={{ params: { name: '/asdfasd' } }} />
    </MemoryRouter>
  );

  expect(getByLabelText(/Name/i).value).toBe('/asdfasd');
  const nameInput = getByLabelText(/Name/i);
  fireEvent.blur(nameInput);
  const nameValidationErrors = await findByTestId(`errors-name`);

  expect(nameValidationErrors.innerHTML).toBe(
    'must be /kubernetes/&lt;namespace&gt;/&lt;secret_name&gt;'
  );

  const valueInput = getByLabelText(/Value/i);
  fireEvent.blur(valueInput);
  const valueValidationErrors = await findByTestId(`errors-value`);
  expect(valueValidationErrors.innerHTML).toBe('value is a required field');
});
