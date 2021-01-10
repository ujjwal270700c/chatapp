const express=require('express');
const router=express.Router();
const {createchannel}=require('../controller/channel')
const {requiresignin}=require('../middlewares/common')

router.post('/api/channel',requiresignin ,createchannel);


module.exports=router;