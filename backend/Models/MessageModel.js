const mongoose = require('mongoose');

// Define the message schema
const messageSchema = new mongoose.Schema({
 
  sender: {
    type: "String",
    // ref: 'User', // Reference to the User model (doctor or patient)
    required:true,
  },
  content: {
    type: String,
   
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const chatSchema = new mongoose.Schema({
  chatId: {
    type: String,
    required: true,
  },
  messages: [messageSchema] // Array of message documents
});

// Create the Chat model
const Chatdata = mongoose.model('Chatdata', chatSchema);

module.exports = Chatdata;

