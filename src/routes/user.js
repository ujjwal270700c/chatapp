const express=require('express');
const router=express.Router();
const {createUser}=require('../controller/user')

router.post('/api/user',createUser);
router.get("/api/user",(req,res)=>{
    res.render("register");
})

module.exports=router;