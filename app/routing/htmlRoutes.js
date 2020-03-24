
var path = require("path");

// ================= 2- ROUTING ====================
module.exports = function (app) {

    // ----- display survey page -----
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // ----- display home page (default) -----
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}



