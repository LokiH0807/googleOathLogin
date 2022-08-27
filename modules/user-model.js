const mongoose = require('mongoose')

//  設定 schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255
  },
  googleID: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  thumbnail: {
    type: String
  },
  // local login
  email: {
    type: String
  },
  password: {
    type: String
  }
})
