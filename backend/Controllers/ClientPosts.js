const ClientPost = require('../Models/ClientPost')

// Add post
exports.addClientPost=async(req,res)=>{
    const { description } = req.body
    try {
        const post = new ClientPost({
            description,Client:req.client.id
        })
        await post.save()
        res.send({msg:'Post added',post})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Get all Post
exports.getAllClientPosts=async(req,res)=>{
    try {
        const posts=await ClientPost.find()
        res.send({msg:'All posts displayed',posts})
    } catch (error) {
        res.send(error.message)
    }
}

// Delete post
exports.deleteClientPost=async(req,res)=>{
    const {clientPostId}=req.params
    try {
        await ClientPost.findByIdAndDelete(clientPostId)
        res.send('Post deleted')
    } catch (error) {
        res.send(error.message)
    }
}

// Update Post
exports.updateClientPost=async(req,res)=>{
    const {clientPostId}=req.params
    try {
        await ClientPost.findByIdAndUpdate(clientPostId,{$set:{...req.body}})
        res.send('Post updated')
    } catch (error) {
        res.send(error.message)
    } 
}

// Get One Post
exports.getOneClientPost=async(req,res)=>{
    const {clientPostId}=req.params
    try {
        const post= await ClientPost.findOne({_id:clientPostId})
        res.send(post)
    } catch (error) {
        res.send(error.message)
    }
}