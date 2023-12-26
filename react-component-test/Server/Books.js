const express = require('express');
const app = express();
const port = 4000;

// enable cors
const cors = require('cors');

app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Array to store books
// define book array with sample books

let books = [
    {
        id: '1',
        title: 'The Great Gatsby',
    },
    {
        id: '2',
        title: 'The Da Vinci Code',
    },
    {
        id: '3',
        title: 'Angels & Demons',
    },
];



// GET /books - Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST /books - Create a new book
app.post('/books', (req, res) => {
    const book = req.body;
    books.push(book);
    res.status(201).json(book);
});

// PUT /books/:id - Update a book
app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const updatedBook = req.body;
    books = books.map(book => {
        if (book.id === id) {
            return { ...book, ...updatedBook };
        }
        return book;
    });
    res.json(updatedBook);
});

// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    books = books.filter(book => book.id !== id);
    res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
