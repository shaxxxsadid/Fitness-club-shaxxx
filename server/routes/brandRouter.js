const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const brandController = require('../controllers/brandController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('BrandName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 })
], authMiddleware, checkRoleMiddleware(3), brandController.create)
router.get('/get', authMiddleware, brandController.getAll)
router.delete('/delete', [
    check('BrandName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('BrandId', "Id роли должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), brandController.delete)
router.patch('/update', [
    check('BrandName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('BrandId', "Id роли должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), brandController.update)

module.exports = router