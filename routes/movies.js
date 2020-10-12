var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

/* GET home page. */
router.get('/', moviesController.index);
router.get('/detail/:id', moviesController.detail);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
router.post('/search', moviesController.search);

module.exports = router;
