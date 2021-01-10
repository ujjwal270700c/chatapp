const load=require('dotenv').config();
if(load.error) throw load.error;
const jwt =require('jsonwebtoken');

exports.givetoken=(req,res)=>{
    const paylaod={
        username:req.user.username,
        name:req.user.name,
        id:req.user._id
    }
    const encoded=jwt.sign(paylaod,process.env.secretkey)
   // res.json({encoded})
   res.status(201).render('index')
}