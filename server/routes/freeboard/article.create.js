let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

let router = (req, res) => {
	let title = req.body.title;
	let contents = req.body.contents;
	let tags = req.body.tags;
	let images = req.body.images;
	let authorUid = req.body.user;

	articleDB.create(authorUid, title, contents, tags, images)
		.then(saved => {
			res.status(201).send();
		})
		.catch(err => {
			res.status(500).send({ "reason": "An error occurred while creating." });
		});
};

module.exports = router;