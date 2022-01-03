const Post = require('../Models/Post')

// Add post
exports.addPost=async(req,res)=>{
    const { description } = req.body
    try {
        const newPost = new Post({
            description
        })
        await newPost.save()
        res.send({msg:'Post added',newPost})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Get all Post
exports.getAllPosts=async(req,res)=>{
    try {
        const posts=await Post.find()
        res.send({msg:'All posts displayed',posts})
    } catch (error) {
        res.send(error.message)
    }
}

// Delete post
exports.deletePost=async(req,res)=>{
    const {postId}=req.params
    try {
        await Post.findByIdAndDelete(postId)
        res.send('Post deleted')
    } catch (error) {
        res.send(error.message)
    }
}

// Update Post
exports.updatePost=async(req,res)=>{
    const {postId}=req.params
    try {
        await Post.findByIdAndUpdate(postId,{$set:{...req.body}})
        res.send('Post updated')
    } catch (error) {
        res.send(error.message)
    } 
}

// Get One Post
exports.getOnePost=async(req,res)=>{
    const {postId}=req.params
    try {
        const post= await Post.findOne({_id:postId})
        res.send(post)
    } catch (error) {
        res.send(error.message)
    }
}