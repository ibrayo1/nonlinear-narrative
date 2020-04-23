const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var ejs = require('ejs');

// define the port
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// static folder
app.use(express.static('public'));

app.get("/", function(req, res){
    res.render('index');
});

// Start the server, listening on port 3000
server.listen(PORT, () => {
    console.log(`Listening to requests on ${server.address().port}`);
});
