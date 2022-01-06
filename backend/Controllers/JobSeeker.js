const JobSeeker = require('../Models/JobSeeker')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

// Signup JobSeeker
exports.signUpJobSeeker=async(req,res)=>{
    const {firstname,lastname,email,password,role}=req.body
    try {
        //check email exists
        const foundJobSeeker=await JobSeeker.findOne({email})
        if(foundJobSeeker){
            return res.status(400).send({errors:[{msg:"Email already exists"}]})
        }
    
        //create new Job seeker
        const jobSeeker=new JobSeeker({
            firstname,lastname,email,password,role
        })
        //Hash password
        const salt=10
        const hashpassword=await bcrypt.hash(password,salt)
        jobSeeker.password=hashpassword

        await jobSeeker.save()

        // Token
        const payload={
            id:jobSeeker._id
        }
        const token=jwt.sign(payload,process.env.secret3,{ expiresIn: '30d' })
        res.status(200).send({jobSeeker,token})
    } catch (error) {
        res.status(500).send('server error')
    }
}

// Signin JobSeeker
exports.singInJobseeker=async(req,res)=>{
    const {email,password}=req.body
    try {
        //check email exists
        const jobSeeker=await JobSeeker.findOne({email})
        if(!jobSeeker){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //check password
        const isMatch=await bcrypt.compare(password,jobSeeker.password)
        if(!isMatch){
            return res.status(400).send({errors:[{msg:"Bad credentials"}]})
        }
        //Token
        const payload={
            id:jobSeeker._id
        }
        const token=jwt.sign(payload,process.env.secret3,{ expiresIn: '30d' })
        res.send({jobSeeker,token})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

// Current jobSeeker
exports.currentJobSeeker=async(req,res)=>{
    try {
        const jobSeeker=await JobSeeker.findById(req.jobSeeker.id)
        res.send(jobSeeker)
    } catch (error) {
        res.status(500).send(error.message)
    }
}