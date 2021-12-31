const mongoose = require('mongoose')
require('dotenv').config()
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURL)
        console.log('db connected')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports=connectDB