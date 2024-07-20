const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { accessChat, fetchChats } = require('../controllers/chatControllers');

// Route to access a chat
router.post('/access', asyncHandler(accessChat));

// Route to fetch chats for a user
router.post('/fetch', asyncHandler(fetchChats));

module.exports = router;
