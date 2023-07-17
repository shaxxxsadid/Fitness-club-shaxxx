const uuid = require('uuid')
const path = require('path');
const { Products } = require('../models/models')
const ApiError = require('../error/ApiError')
const { where } = require('sequelize');
const {unlink} = require('fs/promises')

class ProductsController {
    async create(req, res, next) {
        try {
            const { ProductName, BrandName, Cost, Description, Supplier } = req.body
            console.log(req.files)
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Products.create({ ProductName, BrandName, Cost, Description, Supplier, img: fileName })

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let { BrandName, Supplier, limit, page } = req.query

        page = page || 1
        limit = limit || 9

        let offset = page * limit - limit

        let devices

        if (!BrandName && !Supplier) {
            devices = await Products.findAndCountAll({ limit, offset })
        }
        if (BrandName && !Supplier) {
            devices = await Products.findAndCountAll({ where: { BrandName }, limit, offset })
        }
        if (!BrandName && Supplier) {
            devices = await Products.findAndCountAll({ where: { Supplier }, limit, offset })
        }
        if (BrandName && Supplier) {
            devices = await Products.findAndCountAll({ where: { BrandName, Supplier }, limit, offset })
        }
        return res.json(devices)

    }

    async getOne(req, res) {
        const { ProductId } = req.params
        const device = await Products.findOne({ where: { ProductId } })
        return res.json(device)
    }

    async update(req, res) {
        const { ProductId, ProductName, BrandName, Cost, Description, Supplier } = req.body
        const device = await Products.update({ where: { ProductId }, ProductName, BrandName, Cost, Description, Supplier })
        return res.json(device)
    }
    async delete(req, res) {
        const { ProductId, img } = req.body
        unlink(path.resolve(__dirname, '..', 'static', img)) 
        const device = await Products.destroy({ where: { ProductId, img } })
        return res.json(`Файл: ${(img)} успешно удалён`)
    }

}

module.exports = new ProductsController()