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

let iter = (date, until) => {
	request(`http://dsm2015.cafe24.com:81/meal?year=2017&month=${date.getMonth()}&day=${date.getDate()}`, (err, res, body) => {
		if (err) {
			console.log("Failed to load. : " + err);
			return;
		} else {
			if (date.getMonth() === new Date(2017, 11-1, 01).getMonth()) return;
			
			var forModel = {
				year: date.getFullYear(),
				month: date.getMonth() + 1,
				date: date.getDate(),
				week: date.getWeek(),
				meal: JSON.parse(body)
			};

		
			var meal = new model(forModel);
			
			meal.save((err, meal) => {
				//if (err) console.log(err);
			});
			
			date.setDate(date.getDate() + 1);
			iter(date);
		}
	});
};
iter(new Date(2017, 9, 25), 10);
