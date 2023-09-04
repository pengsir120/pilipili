const Router = require('@koa/router')
const router = new Router({prefix: '/api/v1'})
const userController = require('../controller/userController')

const { registerValidate } = require('../middleware/userValidate')

router
.post('/user/register', registerValidate, userController.register)
.get('/user/:userId', userController.index)

module.exports = router