const {Services} = require('../models/models')
const ApiError = require('../error/ApiError')

class serviceController {
    async create(req, res) {
        const {ServicesName, ServicesPrice, Instructor} = req.body
        const services = await Services.create({ServicesName, ServicesPrice, Instructor})
        return res.json(services)
    }

    async getAll(req, res) {
        const services = await Services.findAll()
        return res.json(services)
    }

    async update(req, res) {
        const {ServicesId, ServicesName, ServicesPrice, Instructor} = req.body
        const services = await Services.update({ ServicesName, ServicesPrice, Instructor},{where: {ServicesId}})
        return res.json("Услуга успешно изменена")
    }

    async delete(req, res) {
        const {ServicesId} = req.body
        const services = await Services.destroy({where: {ServicesId}})
        return res.json("Услуга успешно удалена")
    }
}

module.exports = new serviceController()