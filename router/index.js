const Router = require('@koa/router')
const router = new Router({prefix: '/api/v1'})
const userController = require('../controller/userController')
const vodController = require('../controller/vodController')
const videoController = require('../controller/videoController')

const { registerValidate, loginValidate } = require('../middleware/userValidate')
const { verifyToken } = require('../utils/jwt')

// 用户管理模块
router
.get('/user/subscribelist', verifyToken(), userController.subscribelist)
.get('/user/subscribe/:subscribeId', verifyToken(), userController.subscribe)
.post('/user/login', loginValidate, userController.login)
.post('/user/register', registerValidate, userController.register)
.get('/user/getuser/:userId', verifyToken(false), userController.getuser)
// .get('/user/:userId', userController.index)

// 视频管理模块
router.get('/video/getvod', verifyToken(), vodController.getvod)
router.post('/video/createvideo', verifyToken(), videoController.createVideo)
router.get('/video/getvodplay', vodController.getPlay)

module.exports = router