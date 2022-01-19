const express = require('express');

const router = express.Router();
var connectionPool = require('../database/connection-pool');

/* GET users listing. */
router.get('/', function(req, res, next) {

    const query = {
        text: 'insert into books(author, title, published) VALUES($1, $2, $3)',
        values: ['Ryan Bones', 'Ham Radio Expectations', '2022-01-01'],
    }

    // callback
    connectionPool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res)
        }
    })

    res.send('books here!');
});

module.exports = router;
