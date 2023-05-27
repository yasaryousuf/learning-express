const express = require("express");
const router = express.Router();

router.get('/', function name(req, res, next) {
    res.send("User list!").status(200);
})

router.get('/new', function name(req, res, next) {
    res.send("User new form!").status(200);
})

router.post('/', function name(req, res, next) {
    res.send("User create!").status(200);
})

router.get('/:id', function name(req, res, next) {
    res.send(`User single of ID ${req.params.id}!`).status(200);
})

module.exports = router