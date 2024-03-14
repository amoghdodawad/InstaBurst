const express = require('express')
const { getUser, getUserFriends, addRemoveFriend } = require('../controllers/users.js')

const verifyToken = require('../middleware/auth.js')

const router = express.Router();

//read routes
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends)

//update
router.patch('/:id/:friendId', verifyToken, addRemoveFriend)

module.exports = router