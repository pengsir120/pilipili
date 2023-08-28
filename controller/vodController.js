const RPCClient = require('@alicloud/pop-core').RPCClient
const { accessKeyId, accessKeySecret } = require('../config/config.default')

function initVodClient(accessKeyId, accessKeySecret) {
  const regionId = 'cn-shanghai'
  const client = new RPCClient({
    accessKeyId,
    accessKeySecret,
    endpoint: 'http://vod.' + regionId + '.aliyuncs.com',
    apiVersion: '2017-03-21'
  })
  return client
}

exports.getvod = async (req, res) => {
  // 请求示例
  const client = initVodClient(accessKeyId, accessKeySecret)

  const vodback = await client.request('CreateUploadVideo', {
    Title: 'this is a sample',
    FileName: 'filename.mp4'
  }, {})
  res.status(200).json({
    vod: vodback
  })
}