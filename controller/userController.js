const {
  User
} = require('../model/index')
const {
  createToken
} = require('../utils/jwt')
const fs = require('fs')
const {
  promisify
} = require('util')
const rename = promisify(fs.rename)

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