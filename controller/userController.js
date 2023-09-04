const { User } = require('../model')

module.exports.register = async (ctx, next) => {
  const userModel = new User(ctx.request.body)
  const dbBack = await userModel.save()
  ctx.body = dbBack
}

module.exports.index = async (ctx, next) => {
  const user = await User.findById(ctx.params.userId)
  ctx.body = user
}