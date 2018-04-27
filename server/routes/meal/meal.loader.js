let mealDB = require('../../database/models/meal');

let notFoundMsg = { 
	"reason": "Not found."
};
let invalidQueryMsg = {
	"reason": "Check out your query parameter."
};
let invalidParameterMsg = {
	"reason": "Invalid parameter."
};
let internalServerErrorMsg = {
	"reason": "An internal server error occurred."
};

let errorHandler = (res, status, msg) => {
	res.status(status).json(msg);
};
let mealDatasSender = (res, data) => {
	const meals = [];
	data.forEach((element) => {
		meals.push(element.meal);
	});
	res.status(200).json(meals);
};


/**
 * @swagger
 * /meal:
 *   get:
 *     tags:
 *       - meal
 *     description: Gets list of meals
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: range
 *         description: Specifies range of meal data. If you select monthly, you must include query data which you want month. Else if you select weekly,  you must include query data which you want month and week. Else, you must include query data which you want month and day.
 *         in: url (parameter)
 *         required: true
 *         schema:
 *           /monthly || weekly || daily
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */
let mealRouter = (req, res) => {
	let option = req.params.option;
	let today = new Date();

	let year = today.getFullYear();
	let month = req.query.month;
	let week = req.query.week;
	let date = req.query.date;

	if (option === "weekly") {
		if (!month || !week) {
			errorHandler(res, 400, invalidQueryMsg);
			return;
		}
		mealDB.find({ year: year, month: month, week: week }, (err, docs) => {
			if (err) {
				errorHandler(res, 500, internalServerErrorMsg);
				return;
			}
			if (docs.length === 0) {
				errorHandler(res, 404, notFoundMsg);
				return;
			} 
			mealDatasSender(res, docs);
		});
	} else if (option === "daily") {
		if (!month || !date) {
			errorHandler(res, 400, invalidQueryMsg);
			return;
		}
		mealDB.findOne({ year: year, month: month, date: new Date(year, month, date).getDate() }, (err, doc) => {
			if (err) {
				errorHandler(res, 500, internalServerErrorMsg);
				return;
			}
			if (!doc) {
				errorHandler(res, 404, notFoundMsg);
				return;
			} 
			let mealInfo = doc.meal;
			res.writeHead(200);
			res.write(JSON.stringify(mealInfo));
			res.end();
		});
	} else if (option === "monthly") {
		if (!month) {
			errorHandler(res, 400, invalidQueryMsg);
			return;
		}
		mealDB.find({ year: year, month: month }, (err, docs) => {
			if (err) {
				errorHandler(res, 500, internalServerErrorMsg);
				return;
			}
			if (docs.length === 0) {
				errorHandler(res, 404, notFoundMsg);
				return;
			} 
			mealDatasSender(res, docs);
		});
	} else {
		errorHandler(res, 400, invalidParameterMsg);
		return;
	}
};

module.exports = mealRouter;