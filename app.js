var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpPool = require('nodemailer-smtp-pool');
var transporter = require("transporter");
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


app.get("/contact", function(req, res) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'naomikudren@gmail.com',
            pass: 'pass'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <naomikudren@gmail.com>', // sender address
        to: 'naomikudren@gmail.com, naomikudren@gmail.com', // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world ?', // plain text body
        html: '<b>Hello world ?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
});
