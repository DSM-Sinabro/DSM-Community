const express = require('express');
const mongoose = require('mongoose');
const app = express();
const request = require('request');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/test");

var db = mongoose.Connection;

let mealDB = Schema({
	year: { type: Number, required: true, min: 2017, max: 2019 },
	month: { type: Number, required: true, min: 1, max: 12 },
	date: { type: Number, required: true, min: 1, max: 31 },
	week: { type: Number },
	meal: { type: Array, required: true }
}, {'collection': 'Meal'});

let model = mongoose.model('Meal', mealDB);

model.find({ month: 10 }, (err, docs) => {
	const meals = [];
	docs.forEach(function(element) {
		meals.push(element.meal);
	});
	console.log(JSON.stringify(meals));
	// console.log(meals);
});