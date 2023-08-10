const express = require('express');
const likesController = require('../controllers/likesController');

const router = express.Router();

router.post('/update-like', likesController.updateLikes);
router.get('/check-like',likesController.checklikes);
router.get('/get-likes',likesController.getlikes)


module.exports = router;
