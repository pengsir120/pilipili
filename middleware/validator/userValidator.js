const {
  body
} = require('express-validator')
const validate = require('./errorBack')

module.exports.register = validate([
  body('username').notEmpty().withMessage('用户名不能为空').bail() // bail验证通过往下走 不通过就停止
  .isLength({
    min: 3
  }).withMessage('用户名长度不能小于3'),
  body('email').notEmpty().isEmail()
])