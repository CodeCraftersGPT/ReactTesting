import React from 'react';
import { render,waitFor } from '@testing-library/react';
import Books from './Books';

describe('Books Component', () => {
  it('renders without error', async	() => {
    // mock the rest api to fetch the books
    // define books with 3 items with id and title and return that as part of the mock

    const books = [
      { id: 1, title: 'Refactoring' },
      { id: 2, title: 'Domain-driven design' },
      { id: 3, title: 'Building Microservices' },
    ];

    global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(books)
    })
  );
    const { getByText } = render(<Books />);

    await waitFor(() => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/books');    expect(screen.getByText('Refactoring')).toBeInTheDocument();
    expect(screen.getByText('Domain-driven design')).toBeInTheDocument();
    });
    // Restore original fetch implementation
    global.fetch.mockRestore();
  });
});
