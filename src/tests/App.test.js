import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Recipe Bank text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Recipe Bank/i);
  expect(linkElement).toBeInTheDocument();
});
