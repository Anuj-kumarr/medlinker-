const asyncHandler = require('express-async-handler');
const Chatdata = require('../Models/MessageModel');

// Controller function to send a message
const sendMessage = asyncHandler(async (req, res, next) => {
  const { chatId , sender, content } = req.body;
  console.log(chatId);
  let chatdata = await Chatdata.findOne({ chatId });

  if (!chatdata) {
    chatdata = new Chatdata({ chatId });
  }else{
   if(content){ 
  chatdata.messages.push({ sender, content });
  await chatdata.save();
   }
   }
  console.log("message has been stored success fully");
  
  // return { success: true, message: 'Message stored successfully' };

});

// Controller function to fetch messages for a chat
const fetchMessages = asyncHandler(async (req, res, next) => {
  const { chatId } = req.body;
  console.log(chatId);
  console.log("fetch");
  try {
    // Find all messages for the specified chat
    const chatdata = await Chatdata.findOne({chatId : chatId});
    console.log(chatdata);

    res.json(chatdata.messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    next(error);
  }
});

module.exports = {
  sendMessage,
  fetchMessages
};
