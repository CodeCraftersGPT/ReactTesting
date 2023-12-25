import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter with initial count of 0', () => {
  render(<Counter />);
  const counterElement = screen.getByText('Counter: 0');
  expect(counterElement).toBeInTheDocument();
});

test('increments count when the increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const counterElement = screen.getByText('Counter: 1');
  expect(counterElement).toBeInTheDocument();
});