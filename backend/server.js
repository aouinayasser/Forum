const express=require('express')
const app=express()
const connectDB=require('./config/db')
const authRoutes=require('./routes/auth')



connectDB()

// Middleware
app.use(express.json())
app.use('/api/auth',authRoutes)

const port=5000
app.listen(port,()=>console.log(`server running on port ${port}`))