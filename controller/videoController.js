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