const Router = require('@koa/router')
const router = new Router({prefix: '/api/v1'})
const userController = require('../controller/userController')

const { registerValidate, loginValidate } = require('../middleware/userValidate')
const { verifyToken } = require('../utils/jwt')

router
.post('/user/login', loginValidate, userController.login)
.post('/user/register', registerValidate, userController.register)
.get('/user/getuser/:userId', verifyToken(false), userController.getuser)
// .get('/user/:userId', userController.index)

module.exports = router