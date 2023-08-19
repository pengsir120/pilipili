const mongoose = require('mongoose')
async function main() {
  await mongoose.connect('mongodb://localhost:27017/express-project')
}

main().then(res => {
  console.log('mongo链接成功');
}).catch(err => {
  console.log(err);
  console.log('mongo链接失败');
})

module.exports = {
  User: mongoose.model('User', require('./userModel'))
}