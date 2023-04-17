import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reserve a table form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});
