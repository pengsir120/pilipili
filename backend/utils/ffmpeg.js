const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const minioClient = require('../utils/minio')
const fs = require('fs')
const bucketName = 'test'

const getVideoThumbPic = async (filename, timeStep, fps, skipFramesIdx) => {
  return new Promise((resolve, reject) => {
    const tempDirPath = path.resolve(__dirname, '../temp')

    ffmpeg(`${tempDirPath}/${filename}`)
    .frames(1)
    .videoFilters(`select='gte(n\, ${skipFramesIdx * fps * timeStep * 100})'`, `select='not(mod(n\,${fps * timeStep}))'`, 'scale=320:180', 'tile=10X10')
    .output(`${tempDirPath}/${filename.split('.')[0]}-${skipFramesIdx}.jpg`)
    .on("end", () => {
      minioClient.fPutObject(bucketName, `${filename.split('.')[0]}-${skipFramesIdx}.jpg`, `${tempDirPath}/${filename.split('.')[0]}-${skipFramesIdx}.jpg`, () => {
        fs.unlink(`${tempDirPath}/${filename.split('.')[0]}-${skipFramesIdx}.jpg`, () => {})
      })
      resolve(`http://127.0.0.1:9000/${bucketName}/${filename.split('.')[0]}-${skipFramesIdx}.jpg`)
    })
    .on('error', (err) => {
      return reject(new Error(err))
    })
    .run()
  })
}

const getVideoMetaData = async (filename) => {
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

module.exports.getVideoMetaData = getVideoMetaData

module.exports.getVideoThumbPics = async (filename, timeStep) => {
  return new Promise(async(resolve, reject) => {
    const metadata = await getVideoMetaData(filename)
    const { r_frame_rate, nb_frames } = metadata.streams[0]
    const fps = Number(r_frame_rate.slice(0, 2))
    let picNum = nb_frames / (fps * timeStep * 100)
    if(picNum == Math.floor(picNum)) {
      picNum -= 1
    }
    const pList = []
    for(let i = 0; i < picNum; i++) {
      pList.push(getVideoThumbPic(filename, timeStep, fps, i))
    }
    resolve(Promise.all(pList))
  })
}