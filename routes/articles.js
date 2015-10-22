var express = require('express');
var router = express.Router();


// GET - SHOW MAIN ARTICLES PAGE
router.get('/', function(req, res, next) {
    res.render('articles/index', {
        title: 'Articles'
    });
});

// make this public
module.exports = router;
