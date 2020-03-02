//required
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get route gives requested data from db to admin component
router.get('/', (req, res) => {
    console.log('in router GET')
    const queryText = `SELECT * FROM "feedback" ORDER BY id desc;`;
    pool.query(queryText)
    .then(result => {res.send(result.rows)})
    .catch(err => {
        console.log('GET req error', err);
        res.sendStatus(500);
    })
})

//post route allows completed data set to be added to the sql database
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    const feedback = req.body;
    console.log(feedback.Feelings);
    pool.query(queryText, [feedback.Feelings, feedback.Understanding, feedback.Support, feedback.Comments] )
        .then((response) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('Error in POST', err);
            res.sendStatus(500);
        })
})

//delete feedback from admin page
router.delete('/:id', (req, res) => {
    console.log('in delete');
    
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error in DELETE /feedback', err);
        res.sendStatus(500);
    })
})

module.exports = router;

