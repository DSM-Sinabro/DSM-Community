let articleDB = require('../../database/models/freeboard.article');
let userDB = require('../../database/models/user');

let Schema = require('mongoose').Schema;

/**
 * @swagger
 * /freeboard:
 *   put:
 *     description: Updates an article
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
 * 		 - name: Article ID
 *         description: Article ID (Want to modify)
 *         in: url (parameter)
 *         required: true
 *         schema:
 *            /id: Number
 *     responses:
 *       201:
 *         description: Successfully updated
 * 		 500:
 * 		   description: Internal server error
 */
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