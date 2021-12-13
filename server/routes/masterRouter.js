const Router = require('express')
const router = new Router()
const brandController = require('../controllers/masterController')
const checkRole = require('../middlware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router