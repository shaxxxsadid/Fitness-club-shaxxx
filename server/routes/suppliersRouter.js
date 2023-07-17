const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const suppliersController = require('../controllers/suppliersController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('Name', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('LastName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('OrganizationName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), suppliersController.create)
router.get('/get', suppliersController.getAll)
router.patch('/update', authMiddleware, checkRoleMiddleware(3), suppliersController.update)
router.delete('/delete', [
    check('SupplierId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), suppliersController.delete)

module.exports = router