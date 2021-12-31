const mongoose=require('mongoose')
const schema=mongoose.Schema

const clientSchema=new schema({
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
    companyName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Client',clientSchema)