const { Employees } = require('../models/models')
const ApiError = require('../error/ApiError')

class EmployeesController {
    async create(req, res) {
        const { Position, Education, Specialization, EmployeeAccount, PlaceOfResidence } = req.body
        const employees = await Employees.create({ Position, Education, Specialization, EmployeeAccount, PlaceOfResidence })
        return res.json(employees)
    }

    async getAll(req, res) {
        const employees = await Employees.findAll()
        return res.json(employees)
    }

    async update(req, res) {
        const { EmployeesId, Position, Education, Specialization, EmployeeAccount, PlaceOfResidence } = req.body
        const employees = await Employees.update({ Position, Education, Specialization, EmployeeAccount, PlaceOfResidence },
            { where: { EmployeesId } })
        return res.json("Сотрудник успешно изменен")
    }

    async delete(req, res) {
        const { EmployeesId } = req.body
        const employees = await Employees.destroy({ where: { EmployeesId } })
        return res.json("Сотрудник успешно удален")
    }
}

module.exports = new EmployeesController()