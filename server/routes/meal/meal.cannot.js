let mealCannot = (req, res) => {
	res.status(400).json({ "reason": "Need argument." });
};

module.exports = mealCannot;