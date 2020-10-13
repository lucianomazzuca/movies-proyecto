var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
router.get('/genre/:id', moviesController.genre);

router.post('/search', moviesController.search);

router.get('/create', moviesController.createForm)
router.post('/create', moviesController.create)

router.get('/edit/:id', moviesController.edit);
router.post('/edit/:id', moviesController.update);

router.post('/delete/:id', moviesController.delete);

module.exports = router;
