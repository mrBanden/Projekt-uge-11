'use strict';
const mon = require("./mongooseWrap");
const User = require("./usersschema");
const bcrypt = require('bcryptjs'); 
const session = require('express-session');
const mongoose = require("mongoose");
const dbName = "library";
const CONSTR = `mongodb://localhost:27017/${dbName}`;
const CONPARAM = {useNewUrlParser:true, useUnifiedTopology: true};
const dbServer ='localhost';


// const UFILE = __dirname + '/../data/users.json';

exports.getLogin = async function (que, sort) {
	await mongoose.connect(CONSTR, CONPARAM);
	const db = mongoose.connection;
	db.once("open", function() {
		console.log("connected to server by mongoose")
	});
	let userid;
	let success = false;
    /*if (sort === null)
        sort = {sort: {name: 1}};*/
    try {
        /*let users = await mon.retrieve(dbServer, dbName, User, que, sort); // await er asynkront og venter, til den får info
		console.log(users);*/
		let uid = req.body.uid;
		User.findOne({
				id: uid
		}).then(function(result){
			userid = result;
			console.log(userid.getInfo()); 
			
		});
		//console.log(userid);
		//console.log(req.body.uid);
		if (uid === userid) {
			success = await bcrypt.compare(req.body.password, user.password);
			if (success) {
				req.session.authenticated =true;
				req.session.user = users[0].firstName;
				} else {
					req.session = undefined;
				}
				return success;
			}
		
		}catch(e) {
    	console.log(e.message);
    }
}
