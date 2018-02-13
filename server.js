const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const pug        = require('pug');
const app        = express();

const port = process.env.PORT || 3000;
const index = require('./routes/index');
const playlist = require('./routes/playlist');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/playlist', playlist);

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    res.render('404');
//    next(err);
//});

// error handlers


app.listen(port, function() {
    console.log(`Server is running on ${port}...`);
});