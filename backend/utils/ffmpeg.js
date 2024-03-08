const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

module.exports.getVideoThumbPics = async (filename) => {
  return new Promise((resolve, reject) => {
    const tempDirPath = path.resolve(__dirname, '../temp')

    ffmpeg(`${tempDirPath}/${filename}`)
    .frames(1)
    .videoFilters("select='not(mod(n\,100))'", 'scale=320:180', 'tile=10X10')
    .output(`${tempDirPath}/${filename.split('.')[0]}.jpg`)
    .on("end", () => {
      resolve()
    })
    .on('error', (err) => {
      return reject(new Error(err))
    })
    .run()
  })
}

module.exports.getVideoMetaData = async (filename) => {
  return new Promise((resolve, reject) => {
    const tempDirPath = path.resolve(__dirname, '../temp')
    ffmpeg.ffprobe(`${tempDirPath}/${filename}`, (err, metadata) => {
      if(err) {
        reject(new Error(err))
      }else {
        resolve(metadata)
      }
    })
  })
}