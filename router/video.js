const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
const vodController = require('../controller/vodController')
const validator = require('../middleware/validator/videoValidator')
const {
  verifyToken
} = require('../utils/jwt')

router
  .get('/videolist', verifyToken, videoController.videolist)
  .get('/getvod', verifyToken, vodController.getvod)
  .post('/createvideo', verifyToken, validator.video, videoController.createvideo)
module.exports = router