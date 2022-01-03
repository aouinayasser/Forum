const CallCenter = require('../Models/CallCenter')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

// Signup Call Center
exports.signUpCallCenter=async(req,res)=>{
    const {firstname,lastname,email,password,companyName,role}=req.body
    try {
        //check email exists
        const callCenter=await CallCenter.findOne({email})
        if(callCenter){
            return res.status(400).send({errors:[{msg:"Email already exists"}]})
        }
    
        //create new Call center
        const newCallCenter=new CallCenter({
            firstname,lastname,email,password,companyName,role
        })
        //Hash password
        const salt=10
        const hashpassword=await bcrypt.hash(password,salt)
        newCallCenter.password=hashpassword

        await newCallCenter.save()

        // Token
        const payload={
            id:newCallCenter._id
        }
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send(newCallCenter,token)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

// Signin Call center
exports.singInCallCenter=async(req,res)=>{
    const {email,password}=req.body
    try {
        //check email exists
        const callCenter=await CallCenter.findOne({email})
        if(!callCenter){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //check password
        const isMatch=await bcrypt.compare(password,callCenter.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //Token
        const payload={
            id:callCenter._id
        }
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send({callCenter,token})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

// Current Call center
exports.currentCallCenter=async(req,res)=>{
    try {
        const callCenter=await CallCenter.findById(req.callCenter.id)
        res.send(callCenter)
    } catch (error) {
        res.status(500).send(error.message)
    }
}