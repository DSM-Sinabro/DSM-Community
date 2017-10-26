var schedule = require('node-schedule');

var j = schedule.scheduleJob('5 * * * * *', () => {
	console.log("Hello!");
});
