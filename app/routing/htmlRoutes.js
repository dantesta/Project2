var express = require("express");
var path = require("path");
var router = express.Router();



router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
    console.log(__dirname);

});


router.get('/starWarsSurvey', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/starWarsSurvey.html"));
});

router.get('/marvelSurvey', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/marvelSurvey.html"));
});

router.get('/rickSurvey', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/rickSurvey.html"));
});



module.exports = router;