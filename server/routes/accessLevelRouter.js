const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const accessLevelController = require('../controllers/accessLevelController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create',[
    check('AccessLevelName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 })
], accessLevelController.create)
router.get('/get', authMiddleware, accessLevelController.getAll)
router.delete('/delete',[
    check('AccessLevelName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('AccessLevelId', "Id роли должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), accessLevelController.delete)
router.put('/update',[
    check('AccessLevelName', "Имя роли должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('AccessLevelId', "Id роли должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), accessLevelController.update)

module.exports = router