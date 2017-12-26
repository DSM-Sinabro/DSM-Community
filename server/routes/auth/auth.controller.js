var jwt = require('jsonwebtoken');
var User = require('../../database/models/user');
var uuid = require('uuid-v4');
var nodemailer = require('nodemailer');
const smtpPool = require('nodemailer-smtp-pool');

/**
 * POST /account/auth
 * {
 *      name,
 *      code,
 *      email,
 *      password,
 *      profile
 * }
 */

exports.signup = (req, res) => {
    var {
        name,
        code,
        email,
        password,
        profile
    } = req.body;
    var newUser = null;

    // create a new user if does not exist
    var create = (user) => {
        if (user) {
            throw new Error('name is exist');
        } else {
            return User.create(name, code, email, password, profile);
        }
    }

    // count the number of the user (test the admin) 
    var count = (user) => {
        newUser = user;
        return User.count({}).exec();
    }

    // assign admin if count number is 1 (test the admin)
    var assign = (count) => {
        if (count === 1) {
            return newUser.assignAdmin();
        } else {
            // if not, return a promise that returns false
            return Promise.resolve(false);
        }
    }

    // respond to the client
    var respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        });
    }

    // run when there is an error (username exists)
    var onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    // check name duplication
    User.findOneByName(name)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError);
}

/**
 * POST account/login
 * {
 *      email,
 *      password
 * }
 */

exports.login = (req, res) => {
    var {
        email,
        password
    } = req.body;
    var secret = req.app.get('jwt-secret');

    console.log(secret);
    //check the user info & generate the jwt
    var check = (user) => {
        if (!user) {
            // user does not existu
            throw new Error('login failed');
        } else {
            // user exists, check the password
            if (user.verify(password)) {
                // create a promise that generate jwt asynchronously
                var p = new Promise((resolve, reject) => {
                    jwt.sign({
                            _id: user._id,
                            email: user.email,
                            admin: user.admin
                        },
                        secret, {
                            expiresIn: '1h',
                            subject: 'userInfo'
                        }, (err, token) => {
                            if (err) reject(err)
                            resolve(token)
                        }
                    )
                });
                return p;
            } else {
                throw new Error('login failed');
            }
        }
    }

    // respond the token
    var respond = (token) => {
        res.json({
            message: 'login successfully',
            token
        });
    }

    // error occured
    var onError = (error) => {
        console.log(error);
        res.status(403).json({
            message: error.message
        });

    }

    // find the user
    User.findOneByName(email)
        .then(check)
        .then(respond)
        .catch(onError)
}

/**
 * POST account/email
 */
exports.email = (req, res) => {
    var mail = req.body.email;    
    var myUUID = uuid();
    User.code = myUUID;
    const transporter = nodemailer.createTransport(smtpPool({
        "service": "Gmail",
        "host": "localhost:8080",
        "port": "465",
        "auth" : {
            "user": "sinabrocommunity@gmail.com",
            "pass": "sinabroisbest"
        },
        "tls": {
            rejectUnauthorize: false
        },
        "maxConnections": 5,
        "maxMessages": 10
    }))

    var mailOptions = {
        from: '대뮤니티 <sinabrocommunity@gmail.com>',
        to: mail,
        subject: '대마고 커뮤니티 이메일 인증입니다.',
        text: '인증번호 : ' + myUUID
    };

    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send('Successfully send the email');
            console.log('message sent : ' + response.message);
        }

        smtpTransport.close();
    });
}

// Validity check
exports.configemail = (req, res) => {
    if (req.body.code == User.code) {
        res.send('인증되었습니다.');
    } else {
        res.send('인증번호가 유효하지 않습니다.');
    }
}

/**
 * PUT /account/modifypw
 */
exports.modifypw = (req, res) => {
    User.findById(req.body.name, function(err, User){
        if(err) return res.status(500).json({error: 'database failuer'});
        if(!User) return res.status(404).json({error: 'user not found'});

        if(req.body.password) User.password = req.body.password;

        user.save(function(err){
            if(err) res.status(500).json({error: 'failed to update'});
            res.json({message: 'password updated'});
        })
    });
}

/**
 * POST /account/reset
 */

exports.reset = (req, res) => {
    function randomString() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = '';
        for (var i = 0; i < string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum, rnum + 1);
        }
        //document.randform.randomfield.value = randomstring;
        return randomstring;
    }

    User.findById(req.body.email, function(err, User){
        if(err) res.status(500).json({error: 'database failuer'});
        if(!User) res.status(404).json({error: 'user not found'});

        if(req.body.email) User.password = randomString();
    });

    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: 'Gamil',
        auth:{
            user: 'sinabrocommunity@gmail.com',
            pass: 'sinabroisbest'
        }
    });
    
    var mail = req.body.email;
    var mailOptions = {
        from: '대뮤니티 <sinabrocommunity@gmail.com>',
        to: mail,
        subject: '대마고 커뮤니티 변경된 비밀번호 입니다.',
        text: '비밀번호 : ' + randomString()
    }

    smtpTransport.sendMail(mailOptions, function(error, response) {
        if(error) {
            console.log(error);
        }else{
            res.status(200).send('Successfully send the email');
            console.log('message sent : ' + response.message);
        }
    })
}

exports.modifyuser = (req, res) => {
    User.findById(req.body.password, function(err, User){
        if(err) return res.status(500).json({error: 'database failuer'});
        if(!User) return res.status(404).json({error: 'user not found'});
        if(req.body.email){
            User.email = req.body.email;
        }
        if(req.body.profile){
            User.profile = req.body.profile;
        }
    });
}

exports.findid = (req, res) => {
    User.findById(req.body.email, (err, User) => {
        if(err) return res.status(500).json({error: 'database failuer'});
        if(!User) return res.status(404).json({error: 'user not found'});

        if(req.body.email) res.send(User.name);
    });
}


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       code:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       profile:
 *         type: string
 */

 /**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - auth
 *     summary: Sign Up User
 *     consumes: 
 *       - application/json
 *     parameters: 
 *       - in: body
 *         name: name
 *         description: User Name
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - name
 *           properties:
 *             name: 
 *               type: string
 *       - in: body
 *         name: code
 *         description: User Code
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - code
 *           properties:
 *             code: 
 *               type: string
 *       - in: body
 *         name: Email
 *         description: User Email
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - email
 *           properties:
 *             email: 
 *               type: string
 *       - in: body
 *         name: password
 *         description: User Password
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - password
 *           properties:
 *             password: 
 *               type: string
 *       - in: body
 *         name: profile
 *         description: User Profile
 *         required: false
 *         schema:
 *           type: object
 *           required: 
 *             - profile
 *           properties:
 *             profile: 
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *       409:
 *         description: Uesr is already exist
 */

 /**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - auth
 *     summary: Login User
 *     consumes: 
 *       - application/json
 *     parameters: 
 *       - in: body
 *         name: name
 *         description: User Name
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - name
 *           properties:
 *             name: 
 *               type: string
 *       - in: body
 *         name: password
 *         description: User Password
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - password
 *           properties:
 *             password: 
 *               type: string        
 *     responses:
 *       200:
 *         description: Successfully login
 *         example:
 *           { "message": "login successfully", token }
 *       403:
 *         description: login failed
 */

 /**
 * @swagger
 * /email:
 *   post:
 *     tags:
 *       - auth
 *     summary: Send the email
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: Email
 *         description: User Email
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - email
 *           properties:
 *             email: 
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully send the email
 *       400:
 *         description: Couldn't send the email
 */

 /**
 * @swagger
 * /configemail:
 *   post:
 *     tags:
 *       - auth
 *     summary: verify the code
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: code
 *         description: User Code
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - code
 *           properties:
 *             code: 
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully verify the code
 *       404:
 *         description: Code is not exists
 */

/**
 * @swagger
 * /reset:
 *   post:
 *     tags:
 *       - auth
 *     summary: Reset the password
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: name
 *         description: User Name
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - name
 *           properties:
 *             name: 
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully reset
 *       404:
 *         description: User not found
 */

 /**
 * @swagger
 * /modifyuser:
 *   post:
 *     tags:
 *       - auth
 *     summary: modify user data
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: password
 *         description: User password
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - password
 *           properties:
 *             password:
 *               type: string  
 *       - name: email
 *         description: User email
 *         in: body
 *         required: false
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *       - name: profile
 *         description: User profile
 *         in: body
 *         require: false
 *         schema:
 *           type: object
 *           required:
 *            - profile
 *           properties:
 *             profile:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully reset
 *       403:
 *         description: not allow
 */


 /**
 * @swagger
 * /findid:
 *   post:
 *     tags:
 *       - auth
 *     summary: Find id by email
 *     consumes: 
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: Email
 *         description: User Email
 *         required: true
 *         schema:
 *           type: object
 *           required: 
 *             - email
 *           properties:
 *             email: 
 *               type: string 
 *     responses:
 *       200:
 *         description: Successfully find user id
 *       404:
 *         description: User not found
 *       500:
 *         description: Database failuer
 */