const mongoose=require('mongoose')
const schema=mongoose.Schema

const jobSeekerSchema=new schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
    }
})

module.exports=mongoose.model('JobSeeker',jobSeekerSchema)