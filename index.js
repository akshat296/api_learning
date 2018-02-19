var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var auth = require('./auth');

var app = express();
var router = express.Router();

var port = process.env.PORT = process.env.PORT || 8080;
var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (env == 'production') {
    app.set('public', 'dist');
    app.use(express.static(path.join(__dirname, 'dist')));
}
else {
    app.set('public', 'src');
    app.use(express.static(path.join(__dirname, 'src')));
}

router.get('/', function (req, res) {
    res.redirect('/index.html');
});
router.post('/janrain', auth.oauth);
app.use('/', router);



var _server = http.createServer(app);
_server.listen(process.env.PORT, function () {
    console.log(`Server listening on port http://localhost:${port}`);
});