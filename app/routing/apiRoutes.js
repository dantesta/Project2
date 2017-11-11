var express = require("express");
var path = require("path");
var router = express.Router();
var characterList = require('../data/character.js');
var db = require("../models");

app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
});

app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};


router.post('/api/characters', function(req, res) {
    let newSurvey = req.body;
    let characterPick;
    let characterConnect = [];

    for (var i = 0; i < characterList.length; i++) {
        var totalDifference = 0;

        for (var j = 0; j < 5; j++) {
            let scoreDiff = Math.abs(characterList[i].scores[j] - newSurvey.scores[j]);
            totalDifference += scoreDiff;
        }

        characterConnect.push({
            name: characterList[i].name,
            picture: characterList[i].picture,
            totalDiff: totalDifference
            });
        }

    let maxScore = 25;
    characterConnect.map(function(obj) {
        if (obj.totalDiff < maxScore) maxScore = obj.totalDiff;
    });

    characterPick = characterConnect.filter(function(e) { return e.totalDiff == maxScore; });

    res.json(characterPick);
    characterList.push(newSurvey);

});

router.get('/api/characters', function(req, res) {
    res.json(characterList);
});

module.exports = router;

 


