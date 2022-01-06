const express=require('express')
const app=express()
const connectDB=require('./config/db')
const authRoutes=require('./routes/auth')
const postRoutes = require('./routes/post')
var cors = require('cors')

connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/posts',postRoutes)

const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))