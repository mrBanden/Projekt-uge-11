"use strict";

const mongoose = require('mongoose');

const bookcopiesSchema = mongoose.Schema ({
    bookid: {type: mongoose.Schema.Types.ObjesctId, ref: 'Book'},
    // bookid: Number,
    // id: Number
});

module.exports = mongoose.model("Bookcopies", bookcopiesSchema, 'bookcopies') //books refererer til en collection i databasen 