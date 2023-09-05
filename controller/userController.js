const { User } = require('../model')
const { createToken } = require('../utils/jwt')

module.exports.getuser = async (ctx, next) => {
  ctx.body = ctx.user
}

module.exports.login = async (ctx, next) => {
  const dbBack = await User.findOne(ctx.request.body)
  if(!dbBack) {
    return ctx.throw(402, '邮箱或密码不正确')
  }
  const token = await createToken(dbBack._doc)
  dbBack._doc.token = token
  ctx.body = dbBack._doc
}

module.exports.register = async (ctx, next) => {
  const userModel = new User(ctx.request.body)
  const dbBack = await userModel.save()
  ctx.body = dbBack
}

module.exports.index = async (ctx, next) => {
  const user = await User.findById(ctx.params.userId)
  ctx.body = user
}