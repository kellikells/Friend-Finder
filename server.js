
// ================ DEPENDENCIES ===============
var express = require('express');
var path = require('path');


// ================= EXPRESS ==================
// ---------- creates "express" server ----------
var app = express();

// allows -express- to handle DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ================== ROUTER ===================
//(require the exported module for future use)
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// ============= PORT & LISTENER ===============
//             STARTING THE SERVER 
var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
    console.log(`App listening on Port: ${Port}`);
});