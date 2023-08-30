const {
  User, Subscribe
} = require('../model/index')
const {
  createToken
} = require('../utils/jwt')
const fs = require('fs')
const {
  promisify
} = require('util')
const rename = promisify(fs.rename)
const _ = require('loadsh')

exports.getchannel = async (req, res) => {
  let channelList = await Subscribe.find({channel: req.user._id}).populate('user')
  console.log(channelList);

  channelList = channelList.map(item => {
    return _.pick(item.user, [
      '_id',
      'username',
      'image',
      'subscribeCount',
      'cover',
      'channeldes'
    ])
  })
  res.status(200).json(channelList)
}

exports.getsubscribe = async (req, res) => {
  let subscribeList = await Subscribe.find({user: req.params.userId}).populate('channel')
  subscribeList = subscribeList.map(item => {
    return _.pick(item.channel, [
      '_id',
      'username',
      'image',
      'subscribeCount',
      'cover',
      'channeldes'
    ])
  })
  res.status(200).json(subscribeList)
}

exports.getuser = async (req, res) => {
  let isSubscribe = false
  if(req.user) {
    const subscribeRecord = await Subscribe.findOne({
      user: req.user._id,
      channel: req.params.userId
    })
    if(subscribeRecord) {
      isSubscribe = true
    }
  }

  const channel = await User.findById(req.params.userId)
  res.status(200).json({
    ..._.pick(channel, ['_id', 'username', 'image', 'cover', 'subscribeCount', 'channeldes']),
    isSubscribe
  })
}

exports.unsubscribe = async (req, res) => {
  const userId = req.user._id
  const channelId = req.params.userId
  if(userId == channelId) {
    return res.status(401).json({err: '不能取消关注自己'})
  }
  const subscribeRecord = await Subscribe.findOne({
    user: userId,
    channel: channelId
  })
  if(subscribeRecord) {
    await Subscribe.deleteOne({
      user: userId,
      channel: channelId
    })
    const user = await User.findById(channelId)
    user.subscribeCount--
    await user.save()
    res.status(200).json({user, msg: '取消关注成功'})    
  }else {
    res.status(401).json({err: '没有关注过'})
  }
}

exports.subscribe = async (req, res) => {
  const userId = req.user._id
  const channelId = req.params.userId
  if(userId == channelId) {
    return res.status(401).json({err: '不能关注自己'})
  }
  const subscribeRecord = await Subscribe.findOne({
    user: userId,
    channel: channelId
  })
  if(!subscribeRecord) {
    await new Subscribe({
      user: userId,
      channel: channelId
    }).save()
    const user = await User.findById(channelId)
    user.subscribeCount++
    await user.save()
    res.status(200).json({msg: '关注成功'})    
  }else {
    res.status(401).json({err: '已经关注了'})
  }
}

exports.register = async (req, res) => {
  console.log(req.body);
  const userModel = new User(req.body)
  const dbBack = await userModel.save()
  const user = dbBack.toJSON()
  delete user.password
  res.status(201).json({
    user
  })
}

exports.login = async (req, res) => {
  // 客户端数据验证
  // 链接数据库查询
  let dbBack = await User.findOne(req.body)
  if (!dbBack) {
    res.status(402).json({
      errors: '邮箱或密码不正确'
    })
    return
  }
  dbBack = dbBack.toJSON()
  dbBack.token = await createToken(dbBack)

  res.status(200).json(dbBack)
}

exports.list = async (req, res) => {
  console.log(req.method);
  res.send('/user-list')
}

exports.update = async (req, res) => {
  const dbBack = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true
  })
  res.status(202).json({
    user: dbBack
  })
}

exports.headimg = async (req, res) => {
  console.log(req.file);
  const fileArr = req.file.originalname.split('.')
  const fileType = fileArr[fileArr.length - 1]

  try {
    await rename(`./public/${req.file.filename}`, `./public/${req.file.filename}.${fileType}`)
    res.status(202).json({
      filepath: `${req.file.filename}.${fileType}`
    })
  } catch (error) {
    res.status(500).json({
      errors: error
    })
  }
}

exports.delete = async (req, res) => {

}