'use strict';

const mon = require("./mongooseWrap");
const User = require("./User");
const dbServer ='localhost';

exports.getUser = async function (req, res, next) {
    try {
        let se = await mon.retrieve(dbServer, User, {});
        return se.user;
    } catch (e) {
        console.log(e);
    }
}