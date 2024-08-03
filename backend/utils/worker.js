const { parentPort, workerData } = require('worker_threads')
const { getVideoThumbPicsAndMetaData } = require('./ffmpeg')
const minioClient = require('./minio')
const fs = require('fs')
const bucketName = 'test'
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')

getVideoThumbPicsAndMetaData(workerData.objectName, 4).then(res => {
  const tags = {}
  res.thumbPreviewUrls.forEach((url, index) => {
    tags[`thumbPreviewUrl-${index}`] = url
  })
  const { r_frame_rate, nb_frames } = res.metadata
  tags['frameRate'] = r_frame_rate
  tags['totalFrames'] = nb_frames
  minioClient.setObjectTagging(bucketName, workerData.objectName, tags)
  fs.unlink(`${workerData.tempDirPath}/${workerData.objectName}`, () => {})
})

// parentPort.postMessage(workerData)

