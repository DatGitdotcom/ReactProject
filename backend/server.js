const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require ('./routes/routes')
const cors = require ('cors')

dotenv.config()

mongoose.connect('mongodb+srv://Daniel:DanielDB@cluster0.zumeg.mongodb.net/mytable?retryWrites=true&w=majority', () => console.log("Database connected "))

app.use(express.json())
app.use(cors())
app.use('/api', routesUrls)

app.listen(4000 , () => ("Server is running")) 
