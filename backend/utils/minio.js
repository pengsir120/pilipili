const Minio = require('minio');
const { accessKey, secretKey } = require('../config/config.default')

const minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey,
  secretKey
});

module.exports = minioClient