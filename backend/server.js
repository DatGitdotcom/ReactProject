// framework being used 
const express = require('express')
const app = express()
//database being used 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require ('./routes/routes')
const Adminroutes = require ('./routes/RestRoutes')
//ensuring all ports can interact with the server 
const cors = require ('cors')
const bodyParser = require('body-parser')
//parsing cookies to the http request 
const cookieParser = require ('cookie-parser')


dotenv.config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Database 
mongoose.connect(process.env.DB_CONNECT, () => console.log("Database connected "))

app.use(express.json())
app.use(cookieParser())
app.use(cors({  credentials:true
}))

//routes
app.use('/api', routesUrls)
app.use('/RestApi', Adminroutes)
//
app.listen(4000 , () => ("Server is running")) 
