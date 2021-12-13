require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const sequelize = require('./db')
const models = require('./models/model')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middlware/ErrorHandlingMiddlware')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('server start ' + PORT ))
    } catch (err) {
        console.log(err)
    }
}

start()