const mongoose = require('mongoose');
const request = require('request');
const Schema = mongoose.Schema;

let mealDB = Schema({
	year: { type: Number, required: true, min: 2017, max: 2019 },
	month: { type: Number, required: true, min: 1, max: 12 },
	date: { type: Number, required: true, min: 1, max: 31 },
	week: { type: Number },
	meal: { type: Array, required: true }
}, {'collection': 'Meal'});

let mealLoaderBoxed = (year, month, day) => {
	let model = mongoose.model('Meal', mealDB);
	let gettingDate = new Date(year, month-1, day);
	let nextMonth = gettingDate.getMonth() + 1;

	let iter = (date) => {
		request(`http://dsm2015.cafe24.com:81/meal?year=2017&month=${date.getMonth()+1}&day=${date.getDate()}`, (err, res, body) => {
			if (err) {
				console.error("Failed to load meal data. : " + err);
				throw err;
			} else {
				if (date.getMonth() === nextMonth) return;
				
				var forModel = {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					date: date.getDate(),
					week: Math.ceil(date.getDate() / 7),
					meal: JSON.parse(body)
				};
				var meal = new model(forModel);
				
				meal.save((err, meal) => {
					if (err) {
						console.error("Failed to save meal data to DB.");
						throw err;
					}
				});
				
				date.setDate(date.getDate() + 1);
				iter(date);
			}
		});
	};
	iter(gettingDate);
};
module.exports = mealLoaderBoxed;