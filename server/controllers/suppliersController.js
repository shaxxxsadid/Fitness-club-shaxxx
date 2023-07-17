const { Suppliers } = require('../models/models')
const ApiError = require('../error/ApiError')

class SuppliersController {
    async create(req, res) {
        const { Name, LastName, OrganizationName } = req.body
        const suppliers = await Suppliers.create({ Name, LastName, OrganizationName })
        return res.json(suppliers)
    }

    async getAll(req, res) {
        const suppliers = await Suppliers.findAll()
        return res.json(suppliers)
    }

    async update(req, res) {
        const { SupplierId, Name, LastName, OrganizationName } = req.body
        const suppliers = await Suppliers.update({ Name, LastName, OrganizationName }, { where: { SupplierId } })
        return res.json(suppliers)
    }

    async delete(req, res) {
        const { SupplierId } = req.body
        const suppliers = await Suppliers.destroy({ where: { SupplierId } })
        return res.json(suppliers)
    }
}

module.exports = new SuppliersController()