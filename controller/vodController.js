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

exports.getPlay = async ctx => {
  const client = initVodClient(accessKeyId, accessKeySecret)
  try {
    const response = await client.request('GetPlayInfo', {
      VideoId: '2f8df42048a571ee92446732b68f0102'
    }, {})
    ctx.body = response
  } catch (error) {
    console.log(error);
  }
}