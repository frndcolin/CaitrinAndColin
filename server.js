const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('express-favicon')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')
const pug = require('pug')
const app = express()

const port = process.env.PORT || 3000
const index = require('./routes/index')
const playlist = require('./routes/playlist')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(favicon(path.join(__dirname, '/public/favicon.ico')))
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7 days' }))

app.use('/', index)
app.use('/playlist', playlist)

// error handlers
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    res.render(404);
//    next(err);
// });

app.listen(port, function () {
  console.log(`Server is running on ${port}...`)
})
