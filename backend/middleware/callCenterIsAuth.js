const jwt=require('jsonwebtoken')


const callCenterIsAuth=(req,res,next)=>{
    const token=req.headers["authorization"]
    if(!token){
        return res.status(401).send({errors:[{msg:"You are not authorized"}]})
    }
    try {
        const decoded = jwt.verify(token, process.env.secret)
        req.callCenter=decoded
        next()
    } catch (error) {
        console.log(error.message)
        res.status(401).send({errors:[{msg:"You are not authorized"}]})
    }
}
module.exports=callCenterIsAuth