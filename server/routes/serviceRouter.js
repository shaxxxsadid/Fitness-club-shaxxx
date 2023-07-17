const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const serviceController = require('../controllers/serviceController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('ServicesName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('ServicesPrice', "Ошибка типа или поле должно быть непустым").isFloat().notEmpty(),
    check('Instructor', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty()
], authMiddleware, checkRoleMiddleware(3), serviceController.create)
router.get('/get', authMiddleware, serviceController.getAll)
router.delete('/delete', authMiddleware, checkRoleMiddleware(3), serviceController.delete)
router.patch('/update', [
    check('ServicesId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('ServicesName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('ServicesPrice', "Ошибка типа или поле должно быть непустым").isFloat().notEmpty(),
    check('Instructor', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty()
], authMiddleware, checkRoleMiddleware(3), serviceController.update)

module.exports = router