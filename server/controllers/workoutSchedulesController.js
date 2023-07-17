const { WorkoutSchedule } = require('../models/models')
const ApiError = require('../error/ApiError')

class workoutSchedulesController {
    async create(req, res) {
        const { Day, Workout, Time, TrainingRoom } = req.body
        const workoutSchedule = await WorkoutSchedule.create({ Day, Workout, Time, TrainingRoom })
        return res.json(workoutSchedule)
    }

    async getAll(req, res) {
        const workoutSchedule = await WorkoutSchedule.findAll()
        return res.json(workoutSchedule)
    }

    async update(req, res) {
        const { ScheduleId, Day, Workout, Time, TrainingRoom } = req.body
        const workoutSchedule = await WorkoutSchedule.update({ Day, Workout, Time, TrainingRoom }, { where: { ScheduleId } })
        return res.json(workoutSchedule)
    }

    async delete(req, res) {
        const { ScheduleId } = req.body
        const workoutSchedule = await WorkoutSchedule.destroy({ where: { ScheduleId } })
        return res.json(workoutSchedule)
    }
}

module.exports = new workoutSchedulesController()