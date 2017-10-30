let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

let router = (req, res) => {
	let id = req.params.id;

	articleDB.findByIdAndRemove(id).exec((err, doc) => {
		if (err) {
			res.status(500).send({ "reason": "An error occurred while deleting." });
		}
		res.status(200).send();
	});
};

module.exports = router;