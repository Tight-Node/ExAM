var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://thiagomallon@gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"James Mallong 👥" <thiagomallon@gmail.com>', // sender address
        to: 'thiagomallon@gmail.com, thiagomallon@gmail.com', // list of receivers
        subject: 'Hello!', // Subject line
        text: 'Hi, how are you today?', // plaintext body
        html: '<b>Hello world</b>' // html body
    };

    var infoResponse;
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        infoResponse = info.response;
        console.log('Message sent: ' + info.response);
    });

    res.render('mailer/mailer', {response: infoResponse});
});

module.exports = router;
