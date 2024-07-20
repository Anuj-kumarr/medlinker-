const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { sendMessage, fetchMessages } = require('../controllers/messageControllers');

// Route to send a message
router.post('/chatId/send', asyncHandler(sendMessage));

// Route to fetch messages for a chat
router.post('/chatId/fetch', asyncHandler(fetchMessages));

module.exports = router;
