const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://dbUser:ujjwal1944@cluster0.on2lp.mongodb.net/slack_clone?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=> console.log("connection sucessful")).catch((err)=> console.log(err));