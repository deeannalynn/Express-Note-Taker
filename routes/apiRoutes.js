var index = require("../public/index.html");
var notes = require("../public/notes.html");

module.exports = function(app) {
  app.get("/api/index", function(req, res) {
    res.json(index);
  });

  app.post("/api/index", function(req, res) {
    if (index.length < 5) {
      index.push(req.body);
      res.json(true);
    }
    else {
      notes.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function(req, res) {
    index.length = 0;
    notes.length = 0;

    res.json({ ok: true });
  });
};
