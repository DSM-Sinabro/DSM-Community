let mealDB = require('../../database/models/meal');

let mealRouter = (req, res) => {

	let option = req.params.option;
	let today = new Date();

	if (option === "monthly") {
		mealDB.find({ date: today.getMonth() }, (err, docs) => {
			const meals = [];
			docs.forEach(function(element) {
				meals.push(element.meal);
			});
			res.writeHead(200);
			res.write(JSON.stringify(meals));
		});
	} else if (option === "weekly") {
		let week = req.query.week;
		mealDB.find({ week: week }, (err, docs) => {
			
			res.writeHead(200);
		});
	} else if (option === "daily") {
		mealDB.find({ date: today.getDate() }, (err, docs) => {
			let mealInfo = docs[0].meal;
			res.writeHead(200);
			res.write(mealInfo);
		});
	} else {

	}
};

module.exports = mealRouter;

// const request = require('request');

// let url = "http://dsm2015.cafe24.com:81";

// let dataGetter = (year, month, date) => {
// 	let requestOption = {
// 		url: url,
// 		/* qs: query string */
// 		qs: {
// 			year: year,
// 			month: month,
// 			date: date
// 		}
// 	};

// 	/* DMS 서버에 요청을 보낸다. */
// 	request(requestOption, (err, res, body) => {
// 		if (err) {
// 			console.log("Failed to parse about meal info.");
// 			return;
// 		} else {
// 			return res;
// 		}
// 	});
// };

// module.exports = dataGetter;