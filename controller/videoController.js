const { Video } = require('../model')

module.exports.createVideo = async ctx => {
  const body = ctx.request.body
  body.user = ctx.user.userInfo._id
  const videoModel = new Video(body)
  try {
    const dbback = await videoModel.save()
    ctx.body = dbback
  } catch (error) {
    ctx.throw(502, error)
  }
}

module.exports.videolist = async ctx => {
  const userId = ctx.request.params.userId
  const { pageNum = 1, pageSize = 10 } = ctx.request.query
  const videolist = await Video.find({
    user: userId
  })
  .skip((pageNum - 1) * pageSize)
  .limit(pageSize)
  .sort({ createAt: -1 })
  .populate('user', [
    'cover',
    'username',
    'image',
    'channeldes',
    'subscribeCount'
  ])
  ctx.body = videolist
}