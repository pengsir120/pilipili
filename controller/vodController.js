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

  try {
    const vodback = await client.request('CreateUploadVideo', {
      Title: req.query.title,
      FileName: req.query.filename
    }, {})
    res.status(200).json({
      vod: vodback
    })
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      err: error
    })
  }
}

const getvodPlay = async (vodId) => {
  const client = initVodClient(accessKeyId, accessKeySecret)
  try {
    const response = await client.request('GetPlayInfo', {
      VideoId: vodId
    }, {})
  } catch (error) {
    console.log(error);
  }
}

exports.getPlay = async (req, res) => {
  const play = await getvodPlay(req.query.vodId)
  res.status(200).json({
    play
  })
}