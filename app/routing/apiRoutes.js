
// ============== 1- LOADING DATA ================

var friends = require('../data/friends');


// ================= 2- ROUTING ====================
//               determining what to do

module.exports = function (app) {

    // ----- API GET requests: display JSON of entire data  
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // ----- API POST requests: 
    // handles survey results & compatibility logic
    app.post('/api/friends', function (req, res) {

        // adding the user's survey to all the data
        friends.push(req.body);

        res.json;




    });

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        // tableData.length = 0;
        waitListData.length = 0;

        res.json({ ok: true });
    });
}




