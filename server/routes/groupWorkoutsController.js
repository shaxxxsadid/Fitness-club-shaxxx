const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const groupWorkoutsController = require('../controllers/groupWorkoutsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('WorkoutName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Instructor', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('CommercialClass', "Ошибка типа или поле должно быть непустым").isBoolean().notEmpty(),
    check('WorkoutDescription', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), groupWorkoutsController.create)
router.get('/get', authMiddleware, groupWorkoutsController.getAll)
router.delete('/delete', [
    check('WorkoutName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Instructor', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('WorkoutId', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('CommercialClass', "Ошибка типа или поле должно быть непустым").isBoolean().notEmpty(),
    check('WorkoutDescription', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), groupWorkoutsController.delete)
router.patch('/update', [
    check('WorkoutId', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('WorkoutName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString(),
    check('Instructor', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('CommercialClass', "Ошибка типа или поле должно быть непустым").isBoolean().notEmpty(),
    check('WorkoutDescription', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), groupWorkoutsController.update)

module.exports = router