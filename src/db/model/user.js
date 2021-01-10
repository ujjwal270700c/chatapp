const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    contactnumber:{
        type:Number,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    channels:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Channel'
        }
    ]
},{timestamps:true});
 
module.exports=mongoose.model("User",userSchema);