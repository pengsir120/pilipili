const mongoose = require('mongoose')
const baseModel = require('./baseModel')

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  // vodvideoId: {
  //   type: String,
  //   required: false
  // },
  user: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  cover: {
    type: String,
    required: false
  },
  commentCount: {
    type: Number,
    default: 0,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  dislikeCount: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: false
  },
  sources: {
    type: Array,
    required: false,
    default: []
  },
  duration: {
    type: Number,
    required: true
  },
  playCount: {
    type: Number,
    default: 0,
  },
  thumbPreviewUrls: {
    type: Array,
    required: true
  },
  fileHash: {
    type: String,
    required: true
  },
  frameRate: {
    type: String,
    required: false
  },
  totalFrames: {
    type: Number,
    required: false
  },
  ...baseModel,
})

module.exports = videoSchema