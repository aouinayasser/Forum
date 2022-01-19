const jwt=require('jsonwebtoken')


const callCenterIsAuth=(req,res,next)=>{
    const token=req.headers["authorization"]
    if(!token){
        return res.status(401).send({errors:[{msg:"You are not authorized"}]})
    }
    try {
        const decoded = jwt.verify(token, process.env.secret1)
        req.callCenter=decoded
        next()
    } catch (error) {
        console.log(error)
    }
}
module.exports=callCenterIsAuth