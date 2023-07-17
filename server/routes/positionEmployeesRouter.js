const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const positionEmployeesController = require('../controllers/positionEmployeesController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('PositionName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Salary', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
], authMiddleware, checkRoleMiddleware(3), positionEmployeesController.create)
router.get('/get', authMiddleware, positionEmployeesController.getAll)
router.delete('/delete', [
    check('PositionId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('PositionName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Salary', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
], authMiddleware, checkRoleMiddleware(3), positionEmployeesController.delete)
router.put('/update', [
    check('PositionId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('PositionName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Salary', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
], authMiddleware, checkRoleMiddleware(3), positionEmployeesController.update)

module.exports = router