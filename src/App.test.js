import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign up', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign Up/i);
  expect(linkElement).toBeInTheDocument();
});
