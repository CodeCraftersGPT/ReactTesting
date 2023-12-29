import { render, screen } from '@testing-library/react';
import Books from './Books';

const mockBooks = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ];

describe('Books Component', () => {


  test('fetches and renders books', async () => {
   
    //Mock the fetch function
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockBooks),
    });
  
    render(<Books />);

    //Wait for the books to be fetched and rendered
    //const bookElements = await screen.findAllByText('Books');

         //Assert that the books are rendered correctly
    //expect(bookElements).toHaveLength(mockBooks.length);
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();

    //Restore the original fetch function
    global.fetch.mockRestore();  
  });

//   test('handles error when fetching books', async () => {
//     const errorMessage = 'Error fetching books';

//     // Mock the fetch function to throw an error
//     jest.spyOn(global, 'fetch').mockRejectedValue(new Error(errorMessage));

//     render(<Books />);

//     // Wait for the error message to be rendered
//     const errorElement = await screen.findByText(errorMessage);

//     // Assert that the error message is rendered correctly
//     expect(errorElement).toBeInTheDocument();

//     // Restore the original fetch function
//     global.fetch.mockRestore();
//   });
});