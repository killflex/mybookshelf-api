const express = require("express");
const router = express.Router();

const checkApiKey = require("../middlewares/apiKeyMiddleware");
const {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
} = require("../controllers/bookController");

router.use(checkApiKey);

router.get("/", getBooks);
router.post("/", addBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/search/:q", searchBooks);

module.exports = router;
