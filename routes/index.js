'use strict';
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('site/index', { title: 'Caitrin & Colin are getting married!' });
});

module.exports = router;