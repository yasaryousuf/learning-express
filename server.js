const express = require("express");


const app = express();

app.set('view engine', 'ejs');
app.get('/', function name(req, res, next) {
    console.log("Hello World!");
    res.render('index', { "data": "Hello World!" });
    res.download("server.js");
    // res.send("Hello World!").status(200);
    // res.json({ "data": "Hello World!" }).status(200);
})

app.get('/users', function name(req, res, next) {
    res.send("User list!").status(200);
})

app.get('/users/new', function name(req, res, next) {
    res.send("User new form!").status(200);
})

app.listen(3000);