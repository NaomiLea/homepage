var express = require("express");
var app = express();
var path = require('path');
var bodyparser = require("body-parser");
var nodemailer = require("nodemailer");

app.get("/", function(req, res) {
    app.use(express.static(path.join(__dirname, '/app/css/styles.css')));
    res.sendFile(path.join(__dirname + '/app/index.html'));

})
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
