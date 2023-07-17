const {CardTariffs} = require('../models/models')
const ApiError = require('../error/ApiError')

class cardTariffController {
    async create(req, res) {
        const {TariffName, TariffCost} = req.body
        const cardTariffs = await CardTariffs.create({TariffName, TariffCost})
        return res.json(cardTariffs)
    }

    async getAll(req, res) {
        const cardTariffs = await CardTariffs.findAll()
        return res.json(cardTariffs)
    }

    async update(req, res) {
        const { TariffId, TariffName, TariffCost} = req.body
        const cardTariffs = await CardTariffs.update({where: {TariffId},TariffName, TariffCost})
        return res.json(cardTariffs)
    }

    async delete(req, res) {
        const {TariffId, TariffName, TariffCost} = req.body
        const cardTariffs = await CardTariffs.destroy({where: {TariffId, TariffName, TariffCost}})
        return res.json(cardTariffs)
    }
}

module.exports = new cardTariffController()