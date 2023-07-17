const { TrainingRoom } = require('../models/models')
const ApiError = require('../error/ApiError')

class trainingRoomController {
    async create(req, res) {
        const { RoomName } = req.body
        const trainingRoom = await TrainingRoom.create({ RoomName })
        return res.json(trainingRoom)
    }

    async getAll(req, res) {
        const trainingRoom = await TrainingRoom.findAll()
        return res.json(trainingRoom)
    }

    async update(req, res) {
        const { RoomId, RoomName } = req.body
        const trainingRoom = await TrainingRoom.update({ RoomName }, { where: { RoomId } })
        return res.json(trainingRoom)
    }

    async delete(req, res) {
        const { RoomId } = req.body
        const trainingRoom = await TrainingRoom.destroy({ where: { RoomId } })
        return res.json(trainingRoom)
    }
}

module.exports = new trainingRoomController()