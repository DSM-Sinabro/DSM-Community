let express = require('express');
let path = require('path');
let config = require('./config');
let static = require('serve-static');
let session = require('express-session');
let bodyparser = require('body-parser');
let crypto = require('crypto');
let fileUpload = require('express-fileupload');
let morgan = require('morgan');

let app = express();


let database = require('./database');
let router = require('./routes');

app.use(morgan('dev'));

// app.use(express.static(path.resolve(__dirname, '../react-app', 'build')));

app.use(bodyparser.urlencoded({
    extended: false
}));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../react-app', 'build', 'index.html'));
// });

app.use(bodyparser.json());

// app.use(require('express-method-override')('method_override_param_name'));
app.use(fileUpload());


app.use('/', router);

app.set('jwt-secret', config.secret)

app.listen(config.server_port, function () {
    console.log(config.server_port + ' ON');
    database.init(app);
});