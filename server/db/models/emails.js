const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    contact: {
        type: String,
        trim: true,
        required: true
    }
});

var Email = mongoose.model('Email', emailSchema);

module.exports = {Email: Email};