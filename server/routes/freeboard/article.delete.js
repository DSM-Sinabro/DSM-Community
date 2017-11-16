let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

/**
 * @swagger
 * /freeboard:
 *   delete:
 *     tags:
 *       - freeboard
 *     description: Deletes an article
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Article ID (Want to modify)
 *         description: Article ID
 *         in: url (parameter)
 *         required: true
 *         schema:
 *            /id: Number
 *     responses:
 *       200:
 *         description: Successfully deleted
 * 		 500:
 * 		   description: Internal server error
 */
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