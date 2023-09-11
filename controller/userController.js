const { User, Subscribe } = require('../model')
const { createToken } = require('../utils/jwt')

module.exports.subscribelist = async ctx => {
  const userId = ctx.user.userInfo._id
  const subscribelist = await Subscribe.find({
    user: userId
  }).populate('channel', ['username', 'image', 'channeleds', 'subscribeCount'])
  ctx.body = subscribelist
}

module.exports.subscribe = async ctx => {
  const userId = ctx.user.userInfo._id
  const subscribeId = ctx.params.subscribeId
  if(userId == subscribeId) {
    return ctx.throw(403, '不能关注自己')
  }
  const subscribe = await Subscribe.findOne({
    user: userId,
    channel: subscribeId
  })
  if(subscribe) {
    return ctx.throw(403, '已经关注了')
  }else {
    const subscribeDb = await new Subscribe({
      user: userId,
      channel: subscribeId
    }).save()
    if(subscribeDb) {
      let subscribeUser = await User.findById(subscribeId, [
        'username',
        'image',
        'cover',
        'channeldes',
        'subscribeCount'
      ])
      subscribeUser.subscribeCount++
      await subscribeUser.save()
      ctx.body = {
        subscribeUser,
        msg: '关注成功'
      }
    }else {
      return ctx.throw(501, '关注失败')
    }
  }
}

module.exports.getuser = async ctx => {
  const channel = ctx.params.userId
  const userId = ctx.user ? ctx.user.userInfo._id : null
  let isSubscribe = false
  if(userId) {
    const subscribe = await Subscribe.findOne({
      user: userId,
      channel
    })
    if(subscribe) {
      isSubscribe = true
    }
  }
  let channelInfo = await User.findById(channel, [
    'username',
    'image',
    'cover',
    'channeldes',
    'subscribeCount'
  ])
  channelInfo = channelInfo._doc
  channelInfo.isSubscribe = isSubscribe

  ctx.body = channelInfo
}

module.exports.login = async ctx=> {
  const dbBack = await User.findOne(ctx.request.body)
  if(!dbBack) {
    return ctx.throw(402, '邮箱或密码不正确')
  }
  const token = await createToken(dbBack._doc)
  dbBack._doc.token = token
  ctx.body = dbBack._doc
}

module.exports.register = async ctx => {
  const userModel = new User(ctx.request.body)
  const dbBack = await userModel.save()
  ctx.body = dbBack
}

module.exports.index = async ctx => {
  const user = await User.findById(ctx.params.userId)
  ctx.body = user
}