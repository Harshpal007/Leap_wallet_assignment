const express = require('express');
const likesController = require('../controllers/likesController');
const contentController = require('../controllers/contentController')
const userController =require('../controllers/userController')
const router = express.Router();

router.post('/add-user',userController.addUser);
router.post('/add-content',contentController.addContent);
router.post('/update-like', likesController.updateLikes);
router.get('/check-like',likesController.checklikes);
router.get('/get-likes',likesController.getlikes)


module.exports = router;
