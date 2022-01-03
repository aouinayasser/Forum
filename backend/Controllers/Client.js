const Client = require('../Models/Client')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

// Signup Client
exports.signUpClient=async(req,res)=>{
    const {firstname,lastname,email,password,companyName,role}=req.body
    try {
        //check email exists
        const client=await Client.findOne({email})
        if(client){
            return res.status(400).send({errors:[{msg:"Email already exists"}]})
        }
    
        //create new Client
        const newClient=new Client({
            firstname,lastname,email,password,companyName,role
        })
        //Hash password
        const salt=10
        const hashpassword=await bcrypt.hash(password,salt)
        newClient.password=hashpassword

        await newClient.save()

        // Token
        const payload={
            id:newClient._id
        }
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send(newClient,token)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

// Signin Client
exports.singInClient=async(req,res)=>{
    const {email,password}=req.body
    try {
        //check email exists
        const client=await Client.findOne({email})
        if(!client){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //check password
        const isMatch=await bcrypt.compare(password,client.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //Token
        const payload={
            id:client._id
        }
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send({client,token})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

// Current Client
exports.currentClient=async(req,res)=>{
    try {
        const client=await Client.findById(req.client.id)
        res.send(client)
    } catch (error) {
        res.status(500).send(error.message)
    }
}