'use strict';
const bcrypt = require('bcryptjs'); 
const fs = require('fs').promises;
// const UFILE = __dirname + '/../data/users.json';

module.exports = {
	async getUsers() {
		let re = [];
		try {
			let data = await fs.readFile(UFILE);
			re = JSON.parse(data);
        } catch(e) {
            console.log(e.message);
        }
        return re;
    },
	
	async putUser(req) {
		let ua = [];
		try {
			let data = await fs.readFile(UFILE);
			ua = JSON.parse(data);
			let pwd = await bcrypt.hash(req.body.password, 10);
			let user = {uid: req.body.uid, password: pwd};
			ua.push(user);
			try {
				await fs.writeFile(UFILE, JSON.stringify(ua)); 
			} catch(ee) {
				console.log(ee.message);
			}
		} catch(e) {
            console.log(e.message);
		}
	}
};