const mongoose = require('mongoose')
const baseModel = require('./baseModel')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value),
    select: false
  },
  ...baseModel
})

module.exports = userSchema