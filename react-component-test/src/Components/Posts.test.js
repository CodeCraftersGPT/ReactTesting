// Posts.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from './Posts';

describe('Posts', () => {
  it('fetches and displays posts', async () => {
    // Mock global fetch API
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, title: 'Mocked Post 1', body: 'Mocked body 1' }])
      })
    );

    // Render component
    const { getByText } = render(<Posts />);

    // Wait for the data to be displayed
    await waitFor(() => {
      expect(getByText('Mocked Post 1')).toBeInTheDocument();
      expect(getByText('Mocked body 1')).toBeInTheDocument();
    });

    // Restore original fetch implementation
    global.fetch.mockRestore();
  });
});
