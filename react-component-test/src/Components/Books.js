import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
    const booksApi = 'http://localhost:4000/books';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(booksApi); // Assuming the books API is defined in the server folder
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 >Books</h1>
          
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Books;
