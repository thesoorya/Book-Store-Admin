const express = require("express")
const router = express.Router()
const { createBook, updateBook, getBook, getBooks, deleteBook } = require("../controllers/booksController")

router.post("/", createBook)
router.get("/:id", getBook)
router.get("/", getBooks)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)

module.exports = router