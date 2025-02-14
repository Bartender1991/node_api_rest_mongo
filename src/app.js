const express = require('express')
const mongoose  = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')
config()


const bookRoutes = require('./routes/book.routes')

// Usamos exppress para los middleware
const app = express()
app.use(bodyParser.json()) // parseador de bodies

//conectaremos la DB
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connect;

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serv init in ${port}`)
})