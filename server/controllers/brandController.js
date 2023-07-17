const {Brands} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {BrandName} = req.body
        const brands = await Brands.create({BrandName})
        return res.json(brands)
    }

    async getAll(req, res) {
        const brands = await Brands.findAll()
        return res.json(brands)
    }

    async update(req, res) {
        const {BrandId, BrandName} = req.body
        const brands = await Brands.update({BrandName},{where: {BrandId}})
        return res.json(brands)
    }

    async delete(req, res) {
        const {BrandId} = req.body
        const brands = await Brands.destroy({where: {BrandId}})
        return res.json(brands)
    }
}

module.exports = new BrandController()