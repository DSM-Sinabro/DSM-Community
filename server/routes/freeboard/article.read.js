let articleDB = require('../../database/models/freeboard.article');
const Schema = require('mongoose').Schema;

let router = (req, res) => {
	let id = req.params.id;

	articleDB.findById(id).populate('user', '_id name').exec((err, doc) => {
		if (err) {
			res.status(500).send({ "reason": "An error occurred while finding." });
			return;
		}
		if (!doc) {
			res.status(404).send({ "reason": "Not found." });
			return;
		}
		res.status(200).json(doc);
	});
};


module.exports = router;