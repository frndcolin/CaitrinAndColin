'use strict';
const express = require('express');
const router = express.Router();
const mongoose   = require('../server/db/mongoose.js');
const {Song}     = require('../server/db/models/songs.js');


/* UPDATE Vote total for selected song */
router.patch('/songs/vote', (req, res)=>{
    let id = req.body.id;
    
    Song.findOneAndUpdate({_id: id}, {$inc:{votes: 1}}, {new: true}, function(err, doc){
        if(err){
            console.log(err)
        } else {
            res.send({id: doc._id, votes: doc.votes});   
        }
    });
});

/* ADD New song to database */
router.post('/songs', (req, res)=>{
    let newSong = new Song({
        artist: req.body.artist,
        genre: req.body.genre,
        title: req.body.title,
        link: req.body.link,
        votes: 1
    });
    
    newSong.save().then(()=>{
        res.send('success');
    },((err)=>{
        console.log(err);
    }));
});

/* GET List of songs from database */
router.get('/songs/data', (req, res)=>{
    Song.find({}, function(err, songs){
        if(!err){
            songs = songs.sort((a, b) => {
                return b.votes - a.votes;
            });
            res.json(songs);
        }
        else {
            console.log(err);
        }
    });
});

/* GET Song Voter page */
router.get('/songs', (req, res)=>{
    res.render('playlist/index', { title: 'Wedding Playlist' });
});

/* GET home page. */
router.get('/', function (req, res) {
    res.render('playlist/index', { title: 'Wedding Playlist', attrNG: {'ng-app': "songApp"}});
});

module.exports = router;