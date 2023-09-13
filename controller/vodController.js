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

exports.getvod = async ctx => {
  // 请求示例
  const client = initVodClient(accessKeyId, accessKeySecret)

  try {
    const vodback = await client.request('CreateUploadVideo', {
      Title: ctx.request.query.title,
      FileName: ctx.request.query.filename
    }, {})
    ctx.body = vodback
  } catch (error) {
    console.log(error);
    ctx.throw(error)
  }
}

const getvodPlay = async (vodId) => {
  const client = initVodClient(accessKeyId, accessKeySecret)
  try {
    const response = await client.request('GetPlayInfo', {
      VideoId: vodId
    }, {})
    return response
  } catch (error) {
    console.log(error);
  }
}

exports.getPlay = async ctx => {
  const play = await getvodPlay(ctx.request.query.vodId)
  ctx.body = play
}

module.exports.getvodPlay = getvodPlay
