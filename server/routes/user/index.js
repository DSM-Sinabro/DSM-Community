let router = require('express').Router();


router.route('/user').post((req, res) => {
    let userModel = req.app.get('db').user;

    userModel.signUp(null, function (success) {
        if (success === true) res.status(201).end();
        else res.status(400).end();
    });
});

module.exports = router;