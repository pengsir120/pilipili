const {
  body
} = require('express-validator')
const validate = require('./errorBack')
const {
  Video
} = require('../../model/index')

module.exports.video = validate([
  body('title').notEmpty().withMessage('视频名不能为空').bail() // bail验证通过往下走 不通过就停止
  .isLength({
    max: 20
  }).withMessage('视频名长度不能大于20').bail(),
  body('vodvideoId').notEmpty().withMessage('Vod不能为空').bail()
])