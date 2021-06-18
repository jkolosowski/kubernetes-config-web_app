const express = require('express');
const router = express.Router({mergeParams: true});

const Song = require('../models/Song');

router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        return res.send(songs);
    } catch (error) {
        return res.send({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const song = await Song.find({ _id: req.params.id });
        return res.send(song);
    } catch (error) {
        return res.send({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newSong = await Song.create({ ...req.body });
        return res.send(newSong);
    } catch (error) {
        return res.send({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Song.findOneAndDelete({ _id: req.params.id });
        return res.send({ id: req.params.id });
    } catch (error) {
        return res.send({ error: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const patchedSong = await Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false });
        return res.send(patchedSong);
    } catch (error) {
        return res.send({ error: error.message });
    }
});

module.exports = router;
