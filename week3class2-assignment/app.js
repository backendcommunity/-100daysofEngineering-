const express = require('express');
const app = express();
const morgan = require('morgan');
const { books } = require('./data');

app.use(express.static('./public'));
app.use(express.json());
app.use(morgan('tiny'));

// * POST method

app.post('/api/bookstore', (req, res) => {
  const { id, name, price, author } = req.body;
  const newID = new Date().getTime();

  if (!name && !author) {
    return res
      .status(400)
      .json({ success: false, message: 'Please provide book details' });
  }
  res.status(201).json({
    success: true,
    data: [...books, { id: newID, name: name, price: price, author: author }],
  });
});

// *GET method
app.get('/api/bookstore', (req, res) => {
  res.status(200).json({ success: true, data: books });
});


// * PUT method
app.put('/api/bookstore/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, author } = req.body;

  const oneBook = books.find((b) => b.id === Number(id));
  console.log(oneBook);

  if (!oneBook) {
    return res
      .status(404)
      .json({ success: false, message: `No book with this id: ${id}` });
  }

  const newBook = books.map((b) => {
    if (b.id === Number(id)) {
      oneBook.name = name;
      oneBook.price = price;
      oneBook.author = author;
    }
    return oneBook;
  });

  res.status(200).json({ success: true, data: [...books, newBook] });
});

// * DELETE method
app.delete('/api/bookstore/:id', (req, res) => {
  const { id } = req.params;

  const book = books.filter((b) => b.id === Number(id));

  if (!book) {
    return res
      .status(404)
      .json({ success: false, message: `No book with this id: ${id}` });
  }

  const newBooks = books.filter((b) => b.id !== Number(id));
  return res.status(200).json({ success: true, data: newBooks });
});

// /////////////////

app.all('*', (req, res) => {
  res.status(404).send(' Resource not found');
});
// ////////////////////////////////////////////
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
