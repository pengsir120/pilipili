const {
  Video,
  Videocomment,
  Videolike,
  Subscribe,
  CollectModel,
} = require("../model")
// const { hotInc, topHots } = require('../model/redis/redishotsinc')
// 观看 +1 点赞 +2 评论 +2 收藏 +3
// const { getvodPlay } = require('../controller/vodController')
const minioClient = require('../utils/minio')
const fs = require('fs')
const { resolve } = require('path')
const { getVideoThumbPics, getVideoMetaData } = require('../utils/ffmpeg')
const bucketName = 'test'

exports.getHots = async (req, res) => {
  // const { topnum } = req.params
  // const tops = await topHots(topnum)
  // res.status(200).json({tops})
  res.status(200).json({})
}

exports.collect = async (req, res) => {
  const { videoId } = req.params
  const userId = req.user._id
  const video = await Video.findById(videoId)
  if(!video) {
    return res.status(404).json({
      err: '视频不存在'
    })
  }
  const doc = await CollectModel.findOne({
    user: userId,
    video: videoId
  })
  if(doc) {
    return res.status(403).json({
      err: '已经收藏了'
    })
  }
  const mycollect = await new CollectModel({
    user: userId,
    video: videoId
  }).save()

  // if(mycollect) {
  //   await hotInc(videoId, 3)
  // }

  res.status(201).json({
    mycollect
  })
}

exports.likelist = async (req, res) => {
  const userId = req.user._id
  const {
    pageNum = 1, pageSize = 10
  } = req.body
  const likelist = await Videolike.find({
    user: userId,
    like: 1
  }).skip((pageNum - 1) * pageSize).limit(pageSize).populate('video', '_id title cover vodvideoId commentCount likeCount dislikeCount user')
  const likeCount = await Videolike.countDocuments({
    user: userId,
    like: 1
  })
  res.status(200).json({
    likelist,
    likeCount
  })
}

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
    // await hotInc(videoId, 2)
  } else {
    await new Videolike({
      user: userId,
      video: videoId,
      like: 1
    }).save()
    // await hotInc(videoId, 2)
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
  } = req.query
  const commentlist = await Videocomment.find({
    video: videoId
  }).skip((pageNum - 1) * pageSize).limit(pageSize).populate('user', '_id username image cover').sort({ createAt: 'desc' })
  const count = await Videocomment.count({video: videoId})
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
  // await hotInc(videoId, 2)
  videoInfo.commentCount++
  await videoInfo.save()
  res.status(201).json(comment)
}

exports.videolist = async (req, res) => {
  const {
    pageNum = 1, pageSize = 10, title = ''
  } = req.query
  const filter = {title: new RegExp(title, 'i')}
  const videolist = await Video
    .find(filter)
    .skip((pageNum - 1) * pageSize)
    .limit(pageSize)
    .sort({
      createAt: -1
    })
    .populate('user', '_id cover username')

  const total = await Video.where(filter).countDocuments()
  res.status(200).json({
    videolist,
    total
  })
}

exports.video = async (req, res) => {
  const {
    videoId
  } = req.params
  let videoInfo = await Video.findById(videoId).populate('user', [
    'cover', 
    'username',
    'image',
    'channeldes',
    'subscribeCount',
    'url',
    'description'
  ])
  videoInfo = videoInfo.toJSON()
  if(videoInfo) {
    // const vodInfo = await getvodPlay(videoInfo.vodvideoId)
    // videoInfo.vod = vodInfo
    await Video.findByIdAndUpdate(videoId, { playCount: ++videoInfo.playCount }, { new: true })
    const urlList = videoInfo.url.split("/")
    const tagList = await minioClient.getObjectTagging(bucketName, urlList[urlList.length - 1])
    if(tagList) {
      try {
        const thumbPreviewUrls = tagList[0].filter(item => item.Key.startsWith('thumbPreviewUrl')).map(item => item.Value)
        await Video.findByIdAndUpdate(videoId, { thumbPreviewUrls }, { new: true })
      } catch (error) {
        
      }
    }
  }else {
    return res.status(501).json({
      err: '视频不存在'
    })
  }

  videoInfo.islike = false
  videoInfo.isDislike = false
  videoInfo.isSubscribe = false
  if (req.user) {
    const userId = req.user._id
    if (await Videolike.findOne({
        user: userId,
        video: videoId,
        like: 1
      })) {
      videoInfo.islike = true
    }
    if (await Videolike.findOne({
        user: userId,
        video: videoId,
        like: -1
      })) {
      videoInfo.isDislike = true
    }
    if (await Subscribe.findOne({
        user: userId,
        channel: videoInfo.user
      })) {
      videoInfo.isSubscribe = true
    }
  }
  // await hotInc(videoId, 1)
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

exports.updatevideo = async (req, res) => {
  const { videoId } = req.params
  const dbback = await Video.findByIdAndUpdate(videoId, req.body, { new: true })
  res.status(200).json({
    dbback
  })
}

exports.upload = async (req, res) => {
  const { buffer, mimetype, originalname } = req.file; // 获取上传文件
  const { fileHash } = req.body
  console.log(fileHash);
  // const objectName = Buffer.from(originalname, 'latin1').toString('utf-8') // 设置对象名称
  const objectName = `${fileHash}.${mimetype.split('/')[1]}`
  // const data = await minioClient.putObject(bucketName, objectName, buffer, metaData ? JSON.parse(metaData) : undefined); // 上传到MinIO
  await minioClient.putObject(bucketName, objectName, buffer); // 上传到MinIO
  res.status(200).json({
    url: `http://127.0.0.1:9000/${bucketName}/${objectName}`
  })
  
  if(mimetype.startsWith('video')) {
    const tempDirPath = resolve(__dirname, '../temp')
    minioClient.fGetObject(bucketName, objectName, `${tempDirPath}/${objectName}`, (err, file) => {
      if (err) {
        return console.log(err)
      }
      getVideoThumbPics(objectName, 4).then(thumbPreviewUrls => {
        const tags = {}
        thumbPreviewUrls.forEach((url, index) => {
          tags[`thumbPreviewUrl-${index}`] = url
        })
        minioClient.setObjectTagging(bucketName, objectName, tags)
        fs.unlink(`${tempDirPath}/${objectName}`, () => {})
      })
    })
  }
}