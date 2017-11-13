let articleDB = require('../../database/models/freeboard.article');

/**
 * @swagger
 * /freeboard:
 *   get:
 *     description: Gets list of articles
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: count
 *         description: Article per Page
 *         in: url (query string)
 *         required: true
 *         schema:
 *           count=Number
 * 		 - name: page
 * 		   description: Page number
 * 		   in: url (query string)
 * 		   required: true
 * 		   schema:
 * 			  page=Number
 *     responses:
 *       200:
 *         description: Successfully found
 * 		 404:
 * 		   description: Not Found
 * 		 500:
 * 		   description: Internal server error
 */
let router = (req, res) => {
	let count;
	let page;

	if (!req.query.count) count = 15;
	else count = req.query.count;

	if (!req.query.page) page = 1;
	else page = req.query.page;
	
	if (page <= 0 || count <= 0) {
		res.status(400).send({ "reason": "Wrong index." });
		return;
	}

	// 문서를 꺼내와 최신순으로 정렬한 다음, count 기준의 페이지 수 만큼 스킵하고, count개를 가져온다.
	articleDB.find({}).sort({ _id: -1 }).skip((page - 1) * count).limit(count * 1).exec((err, docs) => {
		if (err) {
			res.status(500).send({ "reason": "An error occurred while finding. : " + err.message });
			return;
		}
		if (docs.length === 0) {
			res.status(404).send({ "reason": "Cannot found articles." });
			return;
		}
		res.status(200).json(docs);
	});
};

module.exports = router;
