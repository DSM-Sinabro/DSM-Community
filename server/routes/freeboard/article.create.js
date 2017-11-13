let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

/**
 * @swagger
 * /freeboard:
 *   post:
 *     description: Creates a new article
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: Article title
 *         in: body (json)
 *         required: true
 *         schema:
 *           "title": String
 * 		 - name: contents
 * 		   description: Article inbody
 * 		   in: body (json)
 * 		   required: true
 * 		   schema:
 * 			  "contents": String
 * 		 - name: tags
 * 		   description: Tags for article
 * 		   in: body (json)
 * 		   required: true
 * 		   schema:
 * 			  "tags": [String]
 * 		 - name: images
 * 		   description: Images for article
 * 		   in: body (json)
 * 		   required: true
 * 		   schema:
 * 			  "images": [String]
 * 		 - name: authorUid
 * 		   description: Article uploader's UID
 * 		   in: body (json)
 * 		   required: true
 * 		   schema:
 * 			  "authorUid": String (length = 24)
 *     responses:
 *       201:
 *         description: Successfully created
 * 		 500:
 * 		   description: Internal server error
 */
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