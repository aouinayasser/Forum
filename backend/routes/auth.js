const express=require('express')
const JobSeeker = require('../Models/JobSeeker')
const router=express.Router()
const { registerRules,validator,loginRules }=require('../middleware/jobSeekerValidator')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const jobSeekerIsAuth = require('../middleware/jobSeekerIsAuth')



//@ url api/auth/jobseeker/signup
//@ method post
//@ req.body
router.post('/jobseeker/signup',[registerRules,validator],async(req,res)=>{
    const {firstname,lastname,email,password,role}=req.body
    try {
        //check email exists
        const jobSeeker=await JobSeeker.findOne({email})
        if(jobSeeker){
            return res.status(400).send({errors:[{msg:"Email already exists"}]})
        }
    
        //create new Job seeker
        const newJobSeeker=new JobSeeker({
            firstname,lastname,email,password,role
        })
        //Hash password
        const salt=10
        const hashpassword=await bcrypt.hash(password,salt)
        newJobSeeker.password=hashpassword

        await newJobSeeker.save()

        // Token
        const payload={
            id:newJobSeeker._id
        }
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send(newJobSeeker,token)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

//@ url api/auth/jobseeker/signin
//@ method post
//@ req.body
router.post('/jobseeker/signin',[loginRules,validator],async(req,res)=>{
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
        const token=jwt.sign(payload,process.env.secret,{ expiresIn: '30d' })
        res.send({jobSeeker,token})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

//@ url/api/auth/jobseeker/current
//@ method get
//@ req.headers
router.get('/jobseeker/current',jobSeekerIsAuth,async(req,res)=>{
    const jobSeeker=await JobSeeker.findById(req.jobSeeker.id)
})

module.exports=router