const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { uuid } = require('../config/config.default')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)

module.exports.createToken = async (userInfo) => {
  const token = await tojwt(userInfo, uuid, {
    expiresIn: 60 * 60 * 24
  })
  return token
}

module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization
  token = token ? token.split('Bearer ')[1] : null
  if(!token) {
    res.status(402).json({
      errors: '请传入token'
    })
    return
  }
  try {
    let userInfo = await verify(token, uuid)
    req.user = userInfo
    next()
  } catch (error) {
    res.status(402).json({
      errors: '无效token'
    })
  }
}