const User=require('../db/model/user');
const bcrypt=require('bcryptjs')
exports.createUser=async(req,res)=>{
   const {name,email,password,contactnumber,username}=req.body;
   try {
       const user=await User.findOne({email});
       if(user) res.status(400).json({msg:"email is already exist"});
       const newuser=new User({
           name,
           email,
           password,
           contactnumber,
           username
       })
       const salt=await bcrypt.genSalt(10);
       newuser.password=await bcrypt.hash(password,salt);
       const data=await newuser.save();
       console.log(data)
      // res.json(data);
      res.status(201).render('login');
   } catch (error) {
       res.status(500).json({msg:"Something went wrong"});
   }
}