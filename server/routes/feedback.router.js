const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const feedback = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('in router GET')
    pool.query(`SELECT * FROM feedback;`)
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('GET req error', err);
        res.sendStatus(500);
    })
})

module.exports = router;

