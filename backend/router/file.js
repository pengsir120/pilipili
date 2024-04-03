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
module.exports = router