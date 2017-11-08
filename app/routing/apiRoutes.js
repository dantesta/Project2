var friends = require("../data/characters.js");





module.exports = function(app) {


  app.get("/api/characters", function(req, res) {
    res.json(Friends);
  });

  


  app.post("/api/characters", function(req, res) {
 
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
  
  });

 


};