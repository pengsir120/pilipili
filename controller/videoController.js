const {
  Video,
  Videocomment,
  Videolike
} = require("../model")

exports.dislikevideo = async (req, res) => {
  const {
    videoId
  } = req.params
  const userId = req.user._id
  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const doc = await Videolike.findOne({
    user: userId,
    video: videoId
  })
  let isdislike = true
  if (doc && doc.like === -1) {
    await doc.deleteOne()
    isdislike = false
  } else if (doc && doc.like === 1) {
    doc.like = -1
    await doc.save()
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: -1
    }).save()
  }
  video.likeCount = await Videolike.countDocuments({
    video: videoId,
    like: 1,
  })
  video.dislikeCount = await Videolike.countDocuments({
    video: videoId,
    like: -1,
  })
  await video.save()
  res.status(200).json({
    ...video.toJSON(),
    isdislike
  })
}

exports.likevideo = async (req, res) => {
  const {
    videoId
  } = req.params
  const userId = req.user._id
  const video = await Video.findById(videoId)
  if (!video) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const doc = await Videolike.findOne({
    user: userId,
    video: videoId
  })
  let islike = true
  if (doc && doc.like === 1) {
    await doc.deleteOne()
    islike = false
  } else if (doc && doc.like === -1) {
    doc.like = 1
    await doc.save()
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: 1
    }).save()
  }
  video.likeCount = await Videolike.countDocuments({
    video: videoId,
    like: 1,
  })
  video.dislikeCount = await Videolike.countDocuments({
    video: videoId,
    like: -1,
  })
  await video.save()
  res.status(200).json({
    ...video.toJSON(),
    islike
  })
}

exports.deletecomment = async (req, res) => {
  const {
    videoId,
    commentId
  } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const comment = await Videocomment.findById(commentId)
  if (!comment) {
    return res.status(404).json({
      err: '评论不存在'
    })
  }
  if (!comment.user.equals(req.user._id)) {
    return res.status(403).json({
      err: '评论不可删除'
    })
  }
  await comment.deleteOne()
  videoInfo.commentCount--
  await videoInfo.save()

  res.status(200).json({
    msg: '删除成功'
  })
}

exports.commentlist = async (req, res) => {
  const {
    videoId
  } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const {
    pageNum = 1, pageSize = 10
  } = req.body
  const commentlist = await Videocomment.find({
    video: videoId
  }).skip((pageNum - 1) * pageSize).limit(pageSize).populate('user', '_id username image')
  const count = await Videocomment.count()
  res.status(200).json({
    commentlist,
    count
  })
}

exports.comment = async (req, res) => {
  const {
    videoId
  } = req.params
  const videoInfo = await Video.findById(videoId)
  if (!videoInfo) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const comment = await new Videocomment({
    content: req.body.content,
    video: videoId,
    user: req.user._id
  }).save()
  videoInfo.commentCount++
  await videoInfo.save()
  res.status(201).json(comment)
}

exports.videolist = async (req, res) => {
  const {
    pageNum = 1, pageSize = 10
  } = req.query
  const videolist = await Video
    .find()
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize)
    .sort({
      createAt: -1
    })
    .populate('user', '_id cover username')
  const total = await Video.countDocuments()
  res.status(200).json({
    videolist,
    total
  })
}

exports.video = async (req, res) => {
  const {
    videoId
  } = req.params
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