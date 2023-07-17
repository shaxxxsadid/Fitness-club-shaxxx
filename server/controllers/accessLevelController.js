const { AccessLevels } = require('../models/models')
const ApiError = require('../error/ApiError')

class AccessLevelController {
    async create(req, res) {
        const { AccessLevelName } = req.body
        const accessLevels = await AccessLevels.create({ AccessLevelName })
        return res.json(accessLevels)
    }

    async getAll(req, res) {
        const accessLevels = await AccessLevels.findAll()
        return res.json(accessLevels)
    }

    async update(req, res) {
        const {AccessLevelId, AccessLevelName } = req.body
        const accessLevels = await AccessLevels.update({ where: {AccessLevelId}, AccessLevelName })
        return res.json(accessLevels)
    }

    async delete(req, res) {
        const {AccessLevelId, AccessLevelName } = req.body
        const accessLevels = await AccessLevels.destroy({ where: {AccessLevelName, AccessLevelId} })
        return res.json(accessLevels)
    }
}

module.exports = new AccessLevelController()