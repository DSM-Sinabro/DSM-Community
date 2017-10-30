let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

let router = (req, res) => {
	let id = req.params.id;
	let title = req.body.title;
	let contents = req.body.contents;
	let tags = req.body.tags;
	let images = req.body.images;
	let user = req.body.user;
	let date = new Date();
	let writeDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	const forArticle = {
		'user': user,
		'title': title,
		'contents': contents,
		'tags': tags,
		'images': images,
		'comments': [],
		'writeDate': writeDate,
		'views': 0
	};

	articleDB.findByIdAndUpdate(id, new articleDB(forArticle)).exec((err, doc) => {
		if (err) {
			res.status(500).send({ "reason": "An error occurred while updating." });
			return;
		}
		res.status(201).send();
	});
};

module.exports = router;