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

let errorHandler = (res, status, msg) => {
	res.writeHead(status);
	res.write(JSON.stringify(msg));
	res.end();
}
let mealDatasSender = (res, data) => {
	const meals = [];
	data.forEach((element) => {
		meals.push(element.meal);
	});
	res.writeHead(200);
	res.write(JSON.stringify(meals));
	res.end();
}

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
				console.error("[Error] at meal.loader.js");
				throw err;
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
				console.error("[Error] at meal.loader.js");
				throw err;
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
				console.error("[Error] at meal.loader.js");
				throw err;
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