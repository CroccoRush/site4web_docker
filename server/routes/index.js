const Router = require('express')
const router = new Router()
const chatRouter = require('./chatRouter')
const contentRouter = require('./contentRouter')
const messageRouter = require('./messageRouter')
const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/room', roomRouter)
router.use('/content', contentRouter)
router.use('/type', typeRouter)
router.use('/message', messageRouter)
router.use('/chat', chatRouter)

module.exports = router