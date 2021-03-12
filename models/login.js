'use strict';
const bcrypt = require('bcryptjs'); 
const fs = require('fs').promises;
// const UFILE = __dirname + '/../data/users.json';

module.exports = {
	async login(req) {
		let re = false;
		try {
			let data = await fs.readFile(UFILE);
			let users = JSON.parse(data);
			for (let user of users) {
				if (req.body.uid === user.uid) {
					re = await bcrypt.compare(req.body.password, user.password);
					break;
				}
			} 
        } catch(e) {
            console.log(e.message);
        }
        return re;
    }
};