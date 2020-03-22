var path = require('path');

// ============== 1- LOADING DATA ================


var friends = require('../data/friends');


// ================= 2- ROUTING ====================
//               determining what to do

module.exports = function (app) {


    // ====== API GET: display JSON of entire data  

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
}



// ====== POST      /api/frieds
//        handles survey results & compatibility logic
