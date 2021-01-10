const express=require('express');
const router =express.Router();
//const passport=require('passport')
const passport=require('../middlewares/passport')
const {givetoken}=require('../controller/auth')

router.use(passport.initialize());

router.post('/api/auth',passport.authenticate("local",{session:false,failureMessage:true}),givetoken);
router.get("/",(req,res)=>{
    res.render("login");
})
module.exports=router;