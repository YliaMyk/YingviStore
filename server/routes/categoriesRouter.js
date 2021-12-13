const Router = require('express')
const router = new Router()
const  categoriesController = require('../controllers/categoriesController')
const checkRole = require('../middlware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), categoriesController.create)
router.get('/', categoriesController.getAll)

module.exports = router