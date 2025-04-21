const axios = require("axios");
const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user._id });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

const addBook = async (req, res) => {
  const { title, author, description } = req.body;

  if (!title || !author || !description) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const book = new Book({
      userId: req.user._id,
      title,
      author,
      description,
    });

    await book.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error creating book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Book.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findOneAndDelete({
      _id: id,
      userId: req.user._id,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
};

const searchBooks = async (req, res) => {
  try {
    const { q } = req.params;
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${q}`
    );

    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(response.data.items);
  } catch (error) {
    res.status(500).json({ message: "Error searching books" });
  }
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
};
