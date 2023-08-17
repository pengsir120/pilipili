const mongoose = require('mongoose')
async function main() {
  await mongoose.connect('mongodb://localhost:27017/mytest')
}

main().then(res => {
  console.log('mongo链接成功');
}).catch(err => {
  console.log(err);
  console.log('mongo链接失败');
})

const user = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
})

const userModel = mongoose.model('User', user)
const u = new userModel({
  username: 'listi',
  age: 18
})
u.save()