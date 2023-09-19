const express = require('express')
const router = express.Router()
const videoController = require('../controller/videoController')
const vodController = require('../controller/vodController')
const validator = require('../middleware/validator/videoValidator')
const {
  verifyToken
} = require('../utils/jwt')

router
  .get('/collect/:videoId', verifyToken(), videoController.collect)
  .get('/likelist', verifyToken(), videoController.likelist)
  .get('/dislike/:videoId', verifyToken(), videoController.dislikevideo)
  .get('/like/:videoId', verifyToken(), videoController.likevideo)
  .delete('/comment/:videoId/:commentId', verifyToken(), videoController.deletecomment)
  .get('/commentlist/:videoId', videoController.commentlist)
  .post('/comment/:videoId', verifyToken(), videoController.comment)
  .get('/videolist', videoController.videolist)
  .get('/video/:videoId', verifyToken(), videoController.video)
  .get('/getvod', verifyToken(), vodController.getvod)
  .post('/createvideo', verifyToken(), validator.video, videoController.createvideo)
module.exports = router