const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { uuid } = require('../config/config.default')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)

module.exports.verifyToken = (required = true) => {
  return async (ctx, next) => {
    let token = ctx.headers.authorization
    token = token ? token.split("Bearer ")[1] : null
    if(token) {
      try {
        let userInfo = await verify(token, uuid)
        ctx.user = userInfo
        await next()
      } catch (error) {
        ctx.throw(402, '无效token')
      }
    }else if(required) {
      ctx.throw(402, '请传入token')
    }else {
      await next()
    }
  }
} 

module.exports.createToken = async userInfo => {
  const token = await tojwt({ userInfo }, uuid, {
    expiresIn: 60 * 60 * 24
  })
  return token
}