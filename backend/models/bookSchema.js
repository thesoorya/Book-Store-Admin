const mongoose = require("mongoose")

const Book = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true
})

const book = mongoose.model("books", Book)
module.exports = book