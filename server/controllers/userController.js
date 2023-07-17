const ApiError = require('../error/ApiError')
const { User, AccessLevels } = require('../models/models')
const bcrypt = require('bcrypt')
const { secret } = require("../config")
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')

const generateAccessToken = (id, role, login) => {
    const payload = {
        id,
        role,
        login
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка регистрации2', errors })
            }
            const { Name, LastName, Surname, Phone, Email, Password, Login, Level_security, Date_of_birth } = req.body
            const newUser = await User.findOne({ where: { Login } })
            if (newUser) {
                return next(ApiError.notFound('Пользователь c таким логином уже существует'))
            }
            const hashPassowrd = bcrypt.hashSync(Password, 7)
            const readyUser = await User.create({ Name, LastName, Surname, Phone, Email, Password: hashPassowrd, Login, Level_security, Date_of_birth })
            const token = generateAccessToken(readyUser.UserId, readyUser.Level_security, readyUser.Login)
            return res.json({ token })
        } catch (e) {
            console.log(e)
            return next(ApiError.badRequest('Ошибка регистрации'))
        }

    }

    async create(req, res) {
        const { Name, LastName, Surname, Phone, Email, Password, Login, ClubCard, Level_security, Date_of_birth } = req.body
        const hashPassowrd = bcrypt.hashSync(Password, 7)
        const newUser = await User.create({ Name, LastName, Surname, Phone, Email, Password: hashPassowrd, Login, ClubCard, Level_security, Date_of_birth })
        return res.json(newUser)
    }

    async login(req, res, next) {
        try {
            const { Login, Password } = req.body
            const user = await User.findOne({ where: { Login } })
            if (!user) {
                return next(ApiError.badRequest(`Пользователь с таким логином ${Login} не найден`))
            }
            const validPassword = bcrypt.compareSync(Password, user.Password)
            if (!validPassword) {
                return next(ApiError.badRequest('Введен неверный пароль'))
            }
            const token = generateAccessToken(user.UserId, user.Level_security, user.Login)
            return res.json(token)
        } catch (e) {
            console.log(e)
            return next(ApiError.badRequest('Ошибка авторизации'))
        }
    }

    async getAll(req, res, next) {
        const users = await User.findAll()
        return res.json(users)
    }

    async getOne(req, res) {
        const { UserId } = req.params
        const device = await User.findOne({ where: { UserId } })
        return res.json(device)
    }

    async update(req, res) {
        const { UserId, Name, LastName, Surname, Phone, Email, Date_of_birth, Login, Password } = req.body
        const hashPassowrd = bcrypt.hashSync(Password, 7)
        const readyUser = await User.update({ Name, LastName, Surname, Phone, Email, Date_of_birth, Login, Password: hashPassowrd },{ where: { UserId }})
        return res.json(`Пользователь изменен`)
    }

    async delete(req, res) {
        const { UserId} = req.body
        const readyUser = await User.destroy({ where: { UserId} })
        return res.json(`Пользователь удален`)
    }

    async check(req, res, next) {
        const token = generateAccessToken(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }
}


module.exports = new UserController()