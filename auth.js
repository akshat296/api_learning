var request = require('request');

function jainRainOauth(req, res) {
    var token = req.query.token || req.body.token;
    console.log(token);
    var options = {
        url: 'https://rpxnow.com/api/v2/auth_info',
        form: {
            apiKey: 'bfc704afbd3c19e24e51b94e70ea9cf57556ffdc',
            token: token
        }
    };

    request.post(options, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            console.log(body);
            res.json(JSON.parse(body));
        } else {
            res.end(body);
        }
    });

}

module.exports = {
    oauth: jainRainOauth
}