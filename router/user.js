const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const validator = require('../middleware/validator/userValidator')
const {
  verifyToken
} = require('../utils/jwt')
const multer = require('multer')
const upload = multer({
  dest: 'public/'
})

router
  .post('/registers',
    validator.register,
    userController.register)
  .post('/logins',
    validator.login,
    userController.login)
  .get('/lists', verifyToken(), userController.list)
  .get('/unsubscribe/:userId', verifyToken(), userController.unsubscribe)
  .get('/subscribe/:userId', verifyToken(), userController.subscribe)
  .put('/', verifyToken(), validator.update, userController.update)
  .post('/headimg', verifyToken(), upload.single('headimg'), userController.headimg)
  .delete('/', userController.delete)

module.exports = router