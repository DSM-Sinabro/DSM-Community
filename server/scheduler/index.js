let scheduler = require('node-scheduler');
let loader = require('../routes/meal/meal.update');

let scheduleDetector = () => {
	/* 매달 1일 실행되도록 설정한 스케줄러: 급식 데이터 로딩용 */
	let scheduled = scheduler.scheduleJob('* * * 1 * *', () => {
		let date = new Date();
		loader(date.getFullYear(), date.getMonth() + 1, date.getDay());
	});
}
module.exports = scheduleDetector;