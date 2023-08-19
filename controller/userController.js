const {
  User
} = require('../model/index')

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

exports.list = async (req, res) => {
  console.log(req.method);
  res.send('/user-list')
}

exports.delete = async (req, res) => {

}