var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpPool = require('nodemailer-smtp-pool');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, './app/public')));

app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname + '/app/index.html'));

})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

app.get('/contact', function(req, res, next) {
    // Create a SMTP transporter object
    var transporter = nodemailer.createTransport(smtpPool({
        host: 'naomikudren.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'naomikudren@gmail.com', // change your username here
            pass: 'password' // change your password here
        }

    }));

    console.log('SMTP Configured');

    // Message object
    var message = {

        // sender info
        from: 'Sender Name <naomikudren@gmail.com>',

        // Comma separated list of recipients
        to: '"Receiver Name" <naomikudren@gmail.com>',

        // Subject of the message
        subject: 'Nodemailer is unicode friendly ', //

        // plaintext body
        text: 'Hello to myself!',

        // HTML body
        html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
            '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
    };

    console.log('Sending Mail');
    transporter.sendMail(message, function(error, info) {
        if (error) {
            console.log('Error occurred');
            res.send(error.message);
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');
        console.log('Server responded with "%s"', info.response);
    });

});
