var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')

const routes = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()) 

var port = process.env.PORT || 8080;

app.use('/api', routes);


app.get('*', (req, res) => {
    res.send('Invalid page');
});

app.listen(port);
console.log('Magic happens on port ' + port);