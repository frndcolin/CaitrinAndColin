const express    = require('express');
const bodyParser = require('body-parser');
const favicon    = require('express-favicon');
const path       = require('path');
const pug        = require('pug');
const app        = express();

const port = process.env.PORT || 3000;
//const index = require('./routes/index');
//const playlist = require('./routes/playlist');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', index);
//app.use('/playlist', playlist);

app.get('/', (req, res)=>{
    res.render('site/index');
});
// error handlers

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    res.send('<h1>HELOO</h1>');
//    next(err);
//});

app.listen(port, function() {
    console.log(`Server is running on ${port}...`);
});