const RPCClient = require('@alicloud/pop-core').RPCClient

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
  const client = initVodClient(
    'LTAI5tAd5KhnbWMcKvkHERmV',
    'givJX3wc8QXuBpQ5R5LHXdzzvZjxaC'
  )

  const vodback = await client.request('CreateUploadVideo', {
    Title: 'this is a sample',
    FileName: 'filename.mp4'
  }, {})
  res.status(200).json({
    vod: vodback
  })
}