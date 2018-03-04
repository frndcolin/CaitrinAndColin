const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    artist: {
        type: String,
        trim: true,
        required: true
    },
    genre: {
        type: Array
    },
    link: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    votes: {
        type: Number
    }
});

var Song = mongoose.model('Song', songSchema);

module.exports = {Song: Song};