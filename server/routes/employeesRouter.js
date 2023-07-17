const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const EmployeesController = require('../controllers/employeesController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('Position', "Должности не может быть пустая").notEmpty().isNumeric(),
    check('Education', "Образование должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('Specialization', "Специализация должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('EmployeeAccount', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('PlaceOfResidence', "Должно быть меньше 50 символов").isLength({ min: 0, max: 50 })
], authMiddleware, checkRoleMiddleware(3), EmployeesController.create)
router.get('/get', authMiddleware, EmployeesController.getAll)
router.delete('/delete', [
    check('EmployeesId', "Id не может быть пустым").notEmpty().isNumeric(),
    check('Position', "Должности не может быть пустая").notEmpty().isNumeric(),
    check('Education', "Образование должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('Specialization', "Специализация должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('EmployeeAccount', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('PlaceOfResidence', "Должно быть меньше 50 символов").isLength({ min: 0, max: 50 })
], authMiddleware, checkRoleMiddleware(3), EmployeesController.delete)
router.patch('/update', [
    check('EmployeesId', "Id не может быть пустым").notEmpty().isNumeric(),
    check('Position', "Должности не может быть пустая").notEmpty().isNumeric(),
    check('Education', "Образование должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('Specialization', "Специализация должно быть меньше 50 символов").isLength({ min: 0, max: 50 }),
    check('EmployeeAccount', "Ошибка типа или поле должно быть непустым").isNumeric().notEmpty(),
    check('PlaceOfResidence', "Должно быть меньше 50 символов").isLength({ min: 0, max: 50 })
], authMiddleware, checkRoleMiddleware(3), EmployeesController.update)

module.exports = router