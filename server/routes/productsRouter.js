const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const productsController = require('../controllers/productsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('ProductName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('BrandName', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('Cost', "Ошибка типа или поле должно быть непустым").isFloat().notEmpty(),
    check('Description', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Supplier', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty()
], authMiddleware, checkRoleMiddleware(3), productsController.create)
router.get('/getAll', authMiddleware, productsController.getAll)
router.get('/getOne/:ProductId', authMiddleware, productsController.getOne)
router.put('/update', [
    check('ProductId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('ProductName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('BrandName', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('Cost', "Ошибка типа или поле должно быть непустым").isFloat().notEmpty(),
    check('Description', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Supplier', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty()
], authMiddleware, checkRoleMiddleware(3), productsController.update)
router.delete('/delete', [
    check('ProductId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), productsController.delete)


module.exports = router 