"use strict";
const mon = require("./mongooseWrap");
const Book = require("./booksschema");
const dbServer = "localhost";
const dbName = "library";

exports.getBooks = async function (que, sort) {
    if (sort === null)
        sort = {sort: {name: 1}};
    try {
        let cs = await mon.retrieve(dbServer, dbName, Book, que, sort);
        return cs;
    } catch (e) {
        console.log(e);
    }
}

exports.postBooks = async function (req) {
    let chk = { title: req.body.title };  // check object for existence
    let book = new Book({                     // create object in db-format
        title: req.body.title,
        id: req.body.id,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        edition: req.body.edition,
        copyright: req.body.copyright,
        publisher: req.body.publisher,
        year: req.body.year,
        place: req.body.place        
    });
    
    //if (req.body.localname === "") book.localname = book.name;
    try {
        let cs = await mon.upsert("localhost", "library", Book, book, chk); //Ikke fjern book, den smider vores bøger i databasen
        return;
    } catch (e) {
        console.log(e);
    }
}