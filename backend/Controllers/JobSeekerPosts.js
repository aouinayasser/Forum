const JobSeekerPost = require('../Models/JobSeekerPost')

// Add post
exports.addJobSeekerPost=async(req,res)=>{
    const { description } = req.body
    try {
        const post = new JobSeekerPost({
            description,JobSeeker:req.jobSeeker.id
        })
        await post.save()
        res.send({msg:'Post added',post})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Get all Post
exports.getAllJobSeekerPosts=async(req,res)=>{
    try {
        const jobSeekersPosts=await JobSeekerPost.find()
        res.send(jobSeekersPosts)
    } catch (error) {
        res.send(error.message)
    }
}

// Delete post
exports.deleteJobSeekerPost=async(req,res)=>{
    const {jobSeekerPostId}=req.params
    try {
        await JobSeekerPost.findByIdAndDelete(jobSeekerPostId)
        res.send('Post deleted')
    } catch (error) {
        res.send(error.message)
    }
}

// Update Post
exports.updateJobSeekerPost=async(req,res)=>{
    const {jobSeekerPostId}=req.params
    try {
        await JobSeekerPost.findByIdAndUpdate(jobSeekerPostId,{$set:{...req.body}})
        res.send('Post updated')
    } catch (error) {
        res.send(error.message)
    } 
}

// Get One Post
exports.getOneJobSeekerPost=async(req,res)=>{
    const {jobSeekerPostId}=req.params
    try {
        const post= await JobSeekerPost.findOne({_id:jobSeekerPostId})
        res.send(post)
    } catch (error) {
        res.send(error.message)
    }
}