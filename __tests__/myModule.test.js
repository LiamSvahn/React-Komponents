import React from 'react';
import { render } from '@testing-library/react';
import App from '../dist/app.tsx';
import '@testing-library/jest-dom';

test('renders hello world', () => {
  const { getByText } = render(<App />);
  const helloWorldElement = getByText(/Hello, world!/i);
  expect(helloWorldElement).toBeInTheDocument();
});
