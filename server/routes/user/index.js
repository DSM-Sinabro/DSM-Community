let router = require('express').Router();
let passport = require('passport');
let isLogined = require('../../util/isLogined');
router.route('/user').post((req, res) => {
    let userModel = req.app.get('db').user;

    userModel.signUp(null, function (success) {
        if (success === true) res.status(201).end();
        else res.status(400).end();
    });
});

// router.post('/signup', passport.authenticate('signup', {
//     failureRedirect: false,
//     failureFlash: true
// }), (req, res) => {
//     res.status(200).end();
// });

router.route('/signup').post(function (req, res, next) {
    passport.authenticate('signup', function (err, success, message) {
        if (err) {
            return next(err);
        } else if (success === false) {
            res.status(400).json(message);
        } else if (success === true) res.status(201).end();
    })(req, res, next);
});

router.route('/login').post(function (req, res, next) {
    passport.authenticate('login-local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).end();
        }

        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            return res.status(200).end();
        });
    })(req, res, next);
});



module.exports = router;