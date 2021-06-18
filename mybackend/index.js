const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const songs = require('./mongodb/routes/songs');
const hearts = require('./redis/routes/hearts');

app.use(express.json());
app.use(cors());

app.use('/songs', songs);
app.use('/hearts', hearts);

require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || 'mymongo-clusterip',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'mymongo'
};

mongoose
    .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(response => {
        console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    })
    .catch(error => console.error('Error connecting to MongoDB', error));


const client = require('./redis/config/redisClient');

client.on('error', err => {
    console.error('Error connecting to Redis', err);
});
client.on('connect', () => {
    console.log(`Connected to Redis.`);
});


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});
