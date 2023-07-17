const { PositionsEmployees } = require('../models/models')
const ApiError = require('../error/ApiError')

class PositionsEmployeesController {
    async create(req, res) {
        const { PositionName, Salary } = req.body
        const positionsEmployees = await PositionsEmployees.create({ PositionName, Salary })
        return res.json(positionsEmployees)
    }

    async getAll(req, res) {
        const positionsEmployees = await PositionsEmployees.findAll()
        return res.json(positionsEmployees)
    }

    async update(req, res) {
        const { PositionId, PositionName, Salary } = req.body
        const positionsEmployees = await PositionsEmployees.update({ where: { PositionId }, PositionName, Salary })
        return res.json(positionsEmployees)
    }

    async delete(req, res) {
        const { PositionId, PositionName, Salary } = req.body
        const positionsEmployees = await PositionsEmployees.destroy({ where: { PositionId, PositionName, Salary } })
        return res.json(positionsEmployees)
    }
}

module.exports = new PositionsEmployeesController()