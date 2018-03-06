'use strict';
const express = require('express');
const router = express.Router();
const mongoose   = require('../server/db/mongoose.js');
const {Email}     = require('../server/db/models/emails.js');

/* add email from form submission */
router.post('/addEmail', function(req, res) {
    let newEmail = new Email({
        contact: req.body.email
    });
    
    newEmail.save().then(()=>{
        res.send('success');
    },((err)=>{
        console.log(err);
    }));
}); 
/* GET home page. */
router.get('/', function (req, res) {
    res.render('site/index', { title: 'Caitrin & Colin are getting married!' });
});

module.exports = router;