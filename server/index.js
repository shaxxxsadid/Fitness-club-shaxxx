require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 5000
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


//Обработка ошибок, Последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}/`))
    } catch (e) {
        console.log(e)
    }
}

start()