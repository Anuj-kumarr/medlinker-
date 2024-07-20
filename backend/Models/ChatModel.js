const mongoose = require('mongoose');

// Define the chat schema
const chatSchema = new mongoose.Schema({
  doctorId: {
    type:"String",
    required: true
  },
  patientId: {
    type: "String", // Reference to the Patient model
    required: true
  },
  messages: [{
    sender: {
      type: String,
      enum: ['Dctr', 'patient'], // Sender can be either doctor or patient
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }]
});

// Create the Chat model
const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
