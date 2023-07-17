const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const workoutScheduleController = require('../controllers/workoutSchedulesController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('Workout', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('TrainingRoom', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('Time', "Отчество должно быть 5 символов").isLength({ min: 5, max: 5 }).isString(),
    check('Day', "Некорректная дата").isISO8601()
], authMiddleware, checkRoleMiddleware(3), workoutScheduleController.create)
router.get('/get', authMiddleware, workoutScheduleController.getAll)
router.delete('/delete', [
    check('ScheduleId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), workoutScheduleController.delete)
router.patch('/update', [
    check('ScheduleId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('Workout', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('TrainingRoom', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('Time', "Отчество должно быть 5 символов").isLength({ min: 5, max: 5 }).isString(),
    check('Day', "Некорректная дата").isISO8601()
], authMiddleware, checkRoleMiddleware(3), workoutScheduleController.update)

module.exports = router