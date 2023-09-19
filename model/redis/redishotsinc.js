const { redis } = require('./index')
exports.hotInc = async (videoId, incNum) => {
  const data = await redis.zscore('videohots', videoId)
  let inc = null
  if(data) {
    inc = await redis.zincrby('videohots', incNum, videoId)
  }else {
    inc = await redis.zadd('videohots', incNum, videoId)
  }
  return inc
}