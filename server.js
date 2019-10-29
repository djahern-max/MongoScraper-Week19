var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
const connectDB = require('./config/db');

//Connect Database
connectDB();

var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('API Running'));

app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(process.cwd() + '/public'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));
