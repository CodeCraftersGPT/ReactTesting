import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
    const booksApi = 'http://localhost:4000/books';

    useEffect(() => {

        fetch(booksApi)
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch(error => console.error('Error fetching data: ', error));


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
