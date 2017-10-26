let mealCannot = (req, res) => {
	res.writeHead(400);
	res.write(JSON.stringify({
		"reason": "Need argument."
	}));
	res.end();
};

module.exports = mealCannot;