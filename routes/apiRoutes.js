var noteData = require("../db/db.json");
var path = require("path");

// var index = require("../public/index.html");
// var notes = require("../public/notes.html");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
      noteData.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function(req, res) {
    index.length = 0;
    notes.length = 0;

    res.json({ ok: true });
  });
};
