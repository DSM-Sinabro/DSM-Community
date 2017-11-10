let articleDB = require('../../database/models/freeboard.article');
const Schema = require('mongoose').Schema;

let router = (req, res) => {
	let id = req.params.id;
	let readUser = req.query.user;

	articleDB.findById(id).populate('user', '_id name').exec((err, doc) => {
		if (err) {
			res.status(500).send({ "reason": "An error occurred while finding. : " + err.message });
			return;
		}
		if (!doc) {
			res.status(404).send({ "reason": "Not found." });
			return;
		}

		// View count 구현하기
		articleDB.findById(id).exec((err, doc) => {
			if (err) {
				res.status(500).send({ "reason": "An error occurred while finding. : " + err.message });
				return;
			}
			if (!doc) {
				res.status(404).send({ "reason": "Not found." });
				return;
			}
			if (readUser.length !== 24) {
				res.status(400).send({ "reason": "Invalid userID." });
				return;
			}
			if (doc.views.indexOf(mongoose.Types.ObjectId(readUser)) === -1) {
				doc.views.push(mongoose.Types.ObjectId(readUser));
				doc.markModified('views');	
				doc.save().then((doc) => { }).catch((err) => {
					res.status(500).send({ "reason": "Internal server error" });
				});
			}
		})
		res.status(200).json(doc);
	});
};

module.exports = router;