const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const helmet = require('helmet')
const mongoose = require('mongoose')

const app = express()
dotenv.config()

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)

// Event handlers for MongoDB connection
const db = mongoose.connection
db.on('error', (error) => console.error('MongoDB connection error:', error))
db.once('connected', () => console.log('Connected to MongoDB'))

// Middleware
app.use(express.json())
app.use(morgan('common'))
app.use(helmet())

// Routes
// Define your routes here
app.get('/',(req,res)=>{
    res.send("In the Home Page")
})
app.get('/users',(req,res)=>{
    res.send("In the User Page")
})


// Start the server
const PORT = process.env.PORT || 8800
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
