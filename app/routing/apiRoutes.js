var surveyData = require("../data/friends");


module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  });

  app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
