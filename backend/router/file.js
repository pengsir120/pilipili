const express = require('express')
const router = express.Router()
const fileController = require('../controller/fileController')
const {
  verifyToken
} = require('../utils/jwt')
const multer = require('multer')
const upload = multer()

router
  .get('/exist', verifyToken(), fileController.exist)
  .post('/upload', verifyToken(), upload.single('file'), fileController.upload)
  .post('/multipleUpload', verifyToken(), fileController.multipleUpload)
  .post('/merge', verifyToken(), fileController.merge)
module.exports = router