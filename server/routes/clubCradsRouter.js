const Router = require('express')
const { check } = require('express-validator')
const router = new Router()
const clubCardsController = require('../controllers/clubCardsController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/create',[
    check('CardTariff', "Ошибка тарифа").isInt(),
    check('CardExpirationDate', "Некорректная дата").isISO8601()
], authMiddleware, checkRoleMiddleware(3), clubCardsController.create)
router.get('/get', authMiddleware, clubCardsController.getAll)
router.delete('/delete',[
    check('CardTariff', "Ошибка тарифа").isInt(),
    check('CardExpirationDate', "Некорректная дата").isISO8601(),
    check('NumberCard', "Номер карт должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), clubCardsController.delete)
router.put('/update',[
    check('CardTariff', "Ошибка тарифа").isInt(),
    check('CardExpirationDate', "Некорректная дата").isISO8601(),
    check('NumberCard', "Номер карты должено быть цифровым и непустым").isInt().notEmpty()
], authMiddleware, checkRoleMiddleware(3), clubCardsController.update)

module.exports = router