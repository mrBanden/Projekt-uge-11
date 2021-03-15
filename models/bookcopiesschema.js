"use strict";

const mongoose = require('mongoose');

const bookcopiesSchema = mongoose.Schema ({
    bookid: Number,
    id: Number
});

module.exports = mongoose.model("Bookcopies", bookcopiesSchema, 'bookscopies') //books refererer til en collection i databasen 