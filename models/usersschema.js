'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: Number,
    password: String,
    cpr: Number,
    currentpenalties: Number,
    email: String,
    firstname: String,
    middlename: String,
    lastname: String,
    newsletter: String
})

module.exports = mongoose.model("User", userSchema, 'persons');