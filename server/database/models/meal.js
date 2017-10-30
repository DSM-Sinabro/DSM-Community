const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mealSchema = Schema({
	year: { type: Number, required: true, min: 2017, max: 2019 },
	month: { type: Number, required: true, min: 1, max: 12 },
	date: { type: Number, required: true, min: 1, max: 31 },
	week: { type: Number },
	meal: { type: Array, required: true }
}, {'collection': 'Meal'});

module.exports = mongoose.model('Meal', mealSchema);