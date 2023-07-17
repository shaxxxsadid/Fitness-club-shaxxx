const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const cardTariffRouter = require('../controllers/cardTariffController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create',[
    check('TariffName', "Имя тарифа должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('TariffCost', "Стоимотсь должна быть цифровой и непустой").isNumeric().notEmpty()
], authMiddleware, checkRoleMiddleware(3), cardTariffRouter.create)
router.get('/get', authMiddleware, cardTariffRouter.getAll)
router.delete('/delete',[
    check('TariffName', "Имя тарифа должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('TariffCost', "Стоимотсь должна быть цифровой и непустой").isNumeric().notEmpty(),
    check('TariffId', "Id тарифа должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), cardTariffRouter.delete)
router.put('/update',[
    check('TariffName', "Имя тарифа должено быть больше 5 и меньше 50 символов").isLength({ min: 5, max: 50 }),
    check('TariffCost', "Стоимотсь должна быть цифровой и непустой").isNumeric().notEmpty(),
    check('TariffId', "Id тарифа должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), cardTariffRouter.update)

module.exports = router