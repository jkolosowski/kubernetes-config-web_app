const { Schema, model } = require('mongoose');

const songSchema = new Schema({
    title: String,
    artist: String,
    album: String,
    release_date: Date
});

module.exports = model('Song', songSchema);
