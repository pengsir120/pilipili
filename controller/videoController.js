const { Video, Videocomment } = require('../model')
const { getvodPlay } = require('../controller/vodController')

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

module.exports.getVideo = async ctx => {
  const videoId = ctx.request.params.videoId
  let videoInfo = await Video.findById(videoId)
  .populate('user', [
    'cover',
    'username',
    'image',
    'channeldes',
    'subscribeCount'
  ])
  videoInfo = videoInfo._doc
  if(videoInfo) {
    const vodInfo = await getvodPlay(videoInfo.vodvideoId)
    videoInfo.vod = vodInfo
    ctx.body = videoInfo
  }else {
    ctx.throw(501, '视频不存在')
  }
}

module.exports.createComment = async ctx => {
  const videoId = ctx.request.params.videoId
  const userId = ctx.user.userInfo._id
  const { content } = ctx.request.body
  const video = await Video.findById(videoId)
  if(video) {
    const commentModel = new Videocomment({
      content,
      video: videoId,
      user: userId
    })
    const dbback = await commentModel.save()
    if(dbback) {
      video.commentCount++
      await video.save()
      // redis hot +2
      ctx.body = {msg: '评论成功'}
    }else {
      ctx.throw(501, '评论失败')
    }
  }else {
    ctx.throw(404, '视频不存在')
  }
}