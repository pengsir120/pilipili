const Minio = require('minio');
const { accessKey, secretKey } = require('../config/config.default')

const minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey,
  secretKey
});

(async () => {
  minioClient.bucketExists('test', (err, exists) => {
    if(err) {
      console.log(err)
    }
    if(exists) {
      console.log('Bucker exists')
    }else {
      minioClient.makeBucket('test', 'zh-east-1', function(err) {
        if(err) {
          console.log(err)
        }
        console.log('Bucket created successfully in zh-east-1')
      })
    }
  })
})()

module.exports = minioClient