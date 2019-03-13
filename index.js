// Imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Init App
const app = express();

// Import Routes
const apiRoutes = require('./api-routes');

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon!'));

// Use API routes in the app
app.use('/api', apiRoutes);

// Launch app to listen to specific port
app.listen(port, function() {
    console.log(`Running RestHub on port ${port}`);
});