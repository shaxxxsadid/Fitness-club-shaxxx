const { ClubCards } = require('../models/models')
const ApiError = require('../error/ApiError')

class clubCardsController {
    async create(req, res) {
        const { CardTariff, CardExpirationDate } = req.body
        const clubCards = await ClubCards.create({ CardTariff, CardExpirationDate })
        return res.json(clubCards)
    }

    async getAll(req, res) {
        const clubCards = await ClubCards.findAll()
        return res.json(clubCards)
    }

    async update(req, res) {
        const { NumberCard, CardTariff, CardExpirationDate } = req.body
        const clubCards = await ClubCards.update({where: {NumberCard}, CardTariff, CardExpirationDate })
        return res.json(clubCards)
    }

    async delete(req, res) {
        const { NumberCard, CardTariff, CardExpirationDate } = req.body
        const clubCards = await ClubCards.destroy({ where: { NumberCard, CardTariff, CardExpirationDate } })
        return res.json(clubCards)
    }
}

module.exports = new clubCardsController()