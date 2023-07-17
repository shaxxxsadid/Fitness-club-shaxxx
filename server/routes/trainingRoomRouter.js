const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const trainingRoomController = require('../controllers/trainingRoomController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create', [
    check('RoomName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), trainingRoomController.create)
router.get('/get', trainingRoomController.getAll)
router.delete('/delete', [
    check('RoomId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('RoomName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), trainingRoomController.delete)
router.patch('/update', [
    check('RoomId', "Ошибка типа или поле должно быть непустым").isInt().notEmpty(),
    check('RoomName', "Ошибка типа или поле должно быть меньше 50 символов").isLength({ min: 0, max: 50 }).notEmpty().isString()
], authMiddleware, checkRoleMiddleware(3), trainingRoomController.update)

module.exports = router