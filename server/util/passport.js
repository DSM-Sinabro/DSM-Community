let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/user');
let AES256 = require('nodejs-aes256');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('signup', new LocalStrategy({
        usernameField: 'id',
        passwordfield: 'password',
        passReqToCallback: true
    }, function (req, id, password, done) {
        User.find({
            "id": AES256.encrypt('keykey', id)
        }).count(function (err, count) {
            if (err) return done(err);
            if (count > 0) return done(null, false, "id already exists");
            else {
                User.find({
                    "code": req.body.code
                }).count(function (err, count) {
                    if (err) return done(err);
                    if (count > 0) return done(null, false, "code already exists");
                    else {
                        let newUser = new User();
                        newUser.uid = newUser.createUUID();
                        newUser.name = req.body.name;
                        newUser.cardinal = req.body.cardinal;
                        newUser.code = req.body.code;
                        newUser.id = AES256.encrypt('keykey', req.body.id);
                        newUser.password = newUser.generateHash(req.body.password);

                        newUser.save(function (err) {
                            if (err === null) throw err;
                            else return done(null, newUser);
                        });
                    }
                });
            }
        });
    }));

    passport.use('login', new LocalStrategy({
            usernameField: 'id',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, id, password, done) {
            User.findOne({
                'id': AES256.encrypt('keykey', id)
            }, function (err, user) {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'could not find the user'));
                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'password does not match.'));
                return done(null, user);
            });
        }));
}