const { GroupWorkouts } = require('../models/models')
const ApiError = require('../error/ApiError')

class groupWorkoutsController {
    async create(req, res) {
        const { WorkoutName, Instructor, CommercialClass, WorkoutDescription } = req.body
        const groupWorkouts = await GroupWorkouts.create({ WorkoutName, Instructor, CommercialClass, WorkoutDescription })
        return res.json(groupWorkouts)
    }

    async getAll(req, res) {
        const groupWorkouts = await GroupWorkouts.findAll()
        return res.json(groupWorkouts)
    }

    async update(req, res) {
        const { WorkoutId, WorkoutName, Instructor, CommercialClass, WorkoutDescription } = req.body
        const groupWorkouts = await GroupWorkouts.update({ WorkoutName, Instructor, CommercialClass, WorkoutDescription },{ where: { WorkoutId }})
        return res.json("Тренировка успешно изменена")
    }

    async delete(req, res) {
        const { WorkoutId } = req.body
        const groupWorkouts = await GroupWorkouts.destroy({ where: { WorkoutId } })
        return res.json("Тренировка успешно удалена")
    }
}

module.exports = new groupWorkoutsController()