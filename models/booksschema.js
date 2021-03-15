"use strict";

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.set('debug', {color: false});

const bookSchema = mongoose.Schema ({
    published: [{publisher: String, year: Number, place: String}],
    authors: [{author: String, firstname: String, middlename: String, lastname: String}],
    title: String,
    id: Number,
    edition: String,
    copyright: String
});

module.exports = mongoose.model("Book", bookSchema, 'book')