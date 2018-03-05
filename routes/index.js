'use strict';
const express = require('express');
const router = express.Router();
//const path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('site/index', { title: 'Caitrin & Colin are getting married!' });
//    res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = router;