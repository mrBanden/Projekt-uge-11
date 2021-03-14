"use strict";

const mongoose = require('mongoose');

const bookSchema = mongoose.Schema ({
    publisher: String,
    authors: String,
    title: String,
    id: Number,
    edition: String
});

module.exports = mongoose.model("Book", bookSchema, 'book')