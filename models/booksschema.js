"use strict";

const mongoose = require('mongoose');
// const mod1 = require('./mod');

const bookSchema = mongoose.Schema ({
    publisher: String,
    authors: String,
    title: String,
    id: Number,
    edition: String
});
const Book = mongoose.model('Book', bookSchema, 'book');


module.exports = mongoose.model('Book', bookSchema)