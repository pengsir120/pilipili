const {
  Video, Videocomment
} = require("../model")

exports.comment = async (req, res) => {
  const { videoId } = req.params
  const videoInfo = await Video.findById(videoId)
  if(!videoInfo) {
    return res.status(401).json({err: '视频不存在'})
  }
  const comment = new Videocomment({
    content: req.body.content,
    video: videoInfo._id,
    user: req.user._id
  })
  await comment.save()
  videoInfo.commentCount++
  await videoInfo.save()
  res.status(200).json(comment)
}

exports.videolist = async (req, res) => {
  const { pageNum = 1, pageSize = 10 } = req.query
  const videolist = await Video
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize)
    .sort({createAt: -1})
    .populate('user', '_id, cover, username')
  const total = await Video.countDocuments()
  res.status(200).json({videolist, total})
}

exports.video = async (req, res) => {
  const { videoId } = req.params
  const videoInfo = await Video.findById(videoId).populate('user', '_id, cover, username')
  res.status(200).json(videoInfo)
}

exports.createvideo = async (req, res) => {
  const body = req.body
  body.user = req.user._id

  const videoModel = new Video(body)
  try {
    const dbback = await videoModel.save()
    res.status(201).json({
      dbback
    })
  } catch (error) {
    res.status(500).json({
      err: error
    })
  }
}