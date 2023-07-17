const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/registration', [
    check('Name', "Имя должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('LastName', "Фамилия должна быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Surname', "Отчество должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Phone', "Некорректный номер телефона").isMobilePhone(),
    check('Email', "Некорректный email").isEmail().normalizeEmail(),
    check('Date_of_birth', "Некорректная дата").isISO8601(),
    check('Login', "Логин не может быть пустым").notEmpty(),
    check('Password', "Пароль должен быть больше 3 и меньше 100 символов").isLength({ min: 3, max: 100 })
], UserController.registration)

router.post('/login', [
    check('login', "Логин не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 3 и меньше 100 символов").isLength({ min: 3, max: 100 })
], UserController.login)
router.get('/users', authMiddleware, checkRoleMiddleware(3), UserController.getAll)
router.get('/getUser/:UserId', authMiddleware, UserController.getOne)
router.patch('/update', authMiddleware, checkRoleMiddleware(3), [
    check('UserId', "UserId не может быть пустым или строкового типа").notEmpty().isNumeric(),
    check('login', "Логин не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 3 и меньше 100 символов").isLength({ min: 3, max: 100 }),
    check('Name', "Имя должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('LastName', "Фамилия должна быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Surname', "Отчество должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Phone', "Некорректный номер телефона").isMobilePhone(),
    check('Email', "Некорректный email").isEmail().normalizeEmail(),
    check('Date_of_birth', "Некорректная дата").isISO8601()
], UserController.update)
router.post('/create', authMiddleware, checkRoleMiddleware(3), [
    check('UserId', "UserId не может быть пустым или строкового типа").notEmpty().isNumeric(),
    check('login', "Логин не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 3 и меньше 100 символов").isLength({ min: 3, max: 100 }),
    check('Name', "Имя должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('LastName', "Фамилия должна быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Surname', "Отчество должно быть больше 1 и меньше 50 символов").isLength({ min: 1, max: 50 }),
    check('Phone', "Некорректный номер телефона").isMobilePhone(),
    check('Email', "Некорректный email").isEmail().normalizeEmail(),
    check('Date_of_birth', "Некорректная дата").isISO8601()
], UserController.create)

router.delete('/delete', authMiddleware, checkRoleMiddleware(3),[
    check('login', "Логин не может быть пустым").notEmpty(),
    
], UserController.delete)

router.get('/auth', authMiddleware, UserController.check)

module.exports = router