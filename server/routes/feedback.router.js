const express = require('express');
const router = express.Router();
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

router.post('/', (req, res) => {
    console.log('In POST');
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;
    console.log(feedback.Feelings);
    pool.query(queryText, [feedback.Feelings, feedback.Understanding, feedback.Support, feedback.Comments] )
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in POST', error);
            res.sendStatus(500);
        })
})

module.exports = router;

