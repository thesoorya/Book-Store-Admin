const Book = require("../models/bookSchema")

exports.createBook = async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            res.status(400).json({
                message: "Enter required fields"
            })
        }

        const newBook = await Book.create(req.body)
        const savedBook = await newBook.save()
        res.status(201).json(savedBook)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

exports.getBooks = async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json({
            count: book.length,
            data: book
        })
    }
    catch (err) {
        res.status(400).send(err)
    }
}


exports.getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(400).json({
                error: "Invalid Id or Data does not exist"
            })
        }
        res.status(200).json(book)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        if (!book) {
            return res.status(400).json({
                error: "Invalid Id or Data does not exist"
            })
        }
        res.status(200).json(book)
    }
    catch (err) {
        res.status(400).send(err)
    }
}

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) {
            return res.status(400).json({
                error: "Invalid Id or Data does not exist"
            })
        }
        res.status(200).json("Data deleted")
    }
    catch (err) {
        res.status(400).send(err)
    }
}

