// server.js
var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});
var port = process.env.PORT || 5022;
app.listen(port);