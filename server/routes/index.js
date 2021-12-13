const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const categoriesRouter = require('./categoriesRouter')
const masterRouter = require('./masterRouter')
const userRouter = require('./userRouter')
const typesRouter = require('./typesRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/master', masterRouter)
router.use('/categories', categoriesRouter)
router.use('/product', productRouter)
router.use('/type', typesRouter)
router.use('/basket', basketRouter)

module.exports = router