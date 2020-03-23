
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

        // saving index of the user's data
        var x = (friends.length - 1);

        for (let i = 0; i < friends.length; i++) {

            if (Math.abs(friends[x].scoreTotal - (friends[i].scoreTotal)) === 0) {
                console.log(`friend match: ${friends[i].name}`);

                res.json(friends[i]);
                return;
            } else {
                res.json('no match');
                return;
            }
        }
    });

    // Empty out the arrays of data
    app.post("/api/clear", function (req, res) {
        friends.length = 0;
        res.json({ ok: true });
    });
}





