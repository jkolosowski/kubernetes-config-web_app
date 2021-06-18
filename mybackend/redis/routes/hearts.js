const express = require('express');
const router = express.Router();
const client = require('../config/redisClient');

router.get('/', async (req, res) => {
    try {
        const allHearts = await client.keys('hearts:*');
        return res.send(allHearts);
    } catch (error) {
        res.send({ error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const heart = await client.get(`hearts:${id}`);
        return res.send(heart);
    } catch (error) {
        res.send({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        const id = req.body.id;
        await client.set(`hearts:${id}`, id);
        return res.send({ newHeart: id });
    } catch (error) {
        res.send({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await client.del(`hearts:${id}`);
        return res.send({ deletedHeart: id });
    } catch (error) {
        res.send({ error });
    }
});

module.exports = router;
