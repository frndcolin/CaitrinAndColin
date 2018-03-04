const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cfriend:bravo496@ds155278.mlab.com:55278/heroku_2ps68g9j");

module.export = {mongoose: mongoose};

