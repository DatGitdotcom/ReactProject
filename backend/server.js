const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require ('./routes/routes')
const cors = require ('cors')
const bodyParser = require('body-parser')

dotenv.config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database 
mongoose.connect(process.env.DB_CONNECT, () => console.log("Database connected "))

app.use(express.json())
app.use(cors())

//routes
app.use('/api', routesUrls)

app.listen(4000 , () => ("Server is running")) 