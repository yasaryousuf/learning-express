const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(logger)
app.set('view engine', 'ejs');
app.get('/', function name(req, res, next) {
    console.log("Hello World!");
    res.render('index', { "data": "Hello World!" });
    res.download("server.js");
    // res.send("Hello World!").status(200);
    // res.json({ "data": "Hello World!" }).status(200);
})

const userRouter = require('./routes/users');
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
app.use('/users', userRouter)

app.listen(3000);