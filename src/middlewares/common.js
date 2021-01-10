const jwt=require('jsonwebtoken');
const load=require('dotenv').config();
if(load.error)throw load.error;

exports.requiresignin=(req,res,next)=>{
    const token=req.header('x-token');
    if(!token) res.status(400).json({msg:"no token found..."})
    try {
        const decodetoken=jwt.verify(token,process.env.secretkey);
        req.user=decodetoken;
        console.log(req.user);
    } catch (error) {
        res.status(500).json({msg:"token is invalid"})
    }
    next();
}

