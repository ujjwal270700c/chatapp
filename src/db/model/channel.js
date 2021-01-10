const mongoose=require('mongoose');

const channelSchema=new mongoose.Schema({
    channelname:{
        type:String,
        require:true
    },
    channeladmin:{
        type:String,
        require:true
    },
    channelusers:[{
        user:{type:String,
        require:true}
    }]
},{timestamps:true});
 
module.exports=mongoose.model("Channel",channelSchema);