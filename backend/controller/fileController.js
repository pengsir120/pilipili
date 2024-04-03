const minioClient = require('../utils/minio')
const fs = require('fs')
const { resolve } = require('path')
const { getVideoThumbPics, getVideoMetaData } = require('../utils/ffmpeg')
const bucketName = 'test'

exports.exist = async (req, res) => {
  const {
    objectName
  } = req.query
  let isFileExist = true
  try {
    await minioClient.statObject(bucketName, objectName)
  } catch (error) {
    isFileExist = false
  }
  res.status(200).json({
    isFileExist,
    url: isFileExist ? `http://127.0.0.1:9000/${bucketName}/${objectName}` : ''
  })
}

exports.upload = async (req, res) => {
  const { buffer, mimetype, originalname } = req.file; // 获取上传文件
  const { fileHash } = req.body
  // const objectName = Buffer.from(originalname, 'latin1').toString('utf-8') // 设置对象名称
  const objectName = `${fileHash}.${mimetype.split('/')[1]}`
  let isObjectExist = true
  try {
    await minioClient.statObject(bucketName, objectName)
  } catch (error) {
    isObjectExist = false
  }
  // const data = await minioClient.putObject(bucketName, objectName, buffer, metaData ? JSON.parse(metaData) : undefined); // 上传到MinIO
  if(!isObjectExist) {
    await minioClient.putObject(bucketName, objectName, buffer); // 上传到MinIO
  }
  res.status(200).json({
    url: `http://127.0.0.1:9000/${bucketName}/${objectName}`
  })
  
  if(mimetype.startsWith('video') && !isObjectExist) {
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