let LocalStrategy = require('passport-local').Strategy;
let User = require('../database/models/user');
// let AES256 = require('nodejs-aes256'); RandomBytes때문에 안됨

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        console.log("serializing user :: " + user._id);
        done(null, user._id);
    });

    passport.deserializeUser(function (_id, done) {
        console.log("deserializing user :: " + _id);
        User.findById(_id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('signup', new LocalStrategy({
        usernameField: 'id',
        passwordfield: 'password',
        passReqToCallback: true
    }, function (req, id, password, done) {
        User.find({
            "id": id
        }).count(function (err, count) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (count > 0) return done(null, false, {
                "message": "id already exists"
            });
            else {
                User.find({
                    "code": req.body.code
                }).count(function (_err, count) {
                    if (_err) return done(_err);
                    if (count > 0) return done(null, false, {
                        "message": "code already exists"
                    });
                    else {
                        let newUser = new User();
                        newUser._id = newUser.createUUID();
                        newUser.name = req.body.name;
                        newUser.cardinal = req.body.cardinal;
                        newUser.code = req.body.code;
                        newUser.id = req.body.id
                        newUser.password = newUser.generateHash(req.body.password);

                        newUser.save(function (__err) {
                            if (__err !== null) {
                                console.log(__err);
                                throw __err;
                            } else return done(null, true);
                        });
                    }
                });
            }
        });
    }));

    passport.use('login-local', new LocalStrategy({
            usernameField: 'id',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, id, password, done) {
            User.findOne({
                'id': id
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {
                        "message": "could not find the user"
                    });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        "message": "password does not match."
                    });
                } else return done(null, user);
            });
        }));
}