const { parse } = require('dotenv')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')
module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({ message: "Не авторизован" })
            }
            const decoded = jwt.verify(token, secret)
            console.log(decoded.role)
            if (decoded.role !== roles) {
                return res.status(403).json({message: "Нет прав"})
            }
            next()
        } catch (e) {
            res.status(401).json({ message: "Не авторизован" })
        }
    }
}