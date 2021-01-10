const mongoose=require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.uri,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=> console.log("connection sucessful")).catch((err)=> console.log(err));
// const mongoose = require('mongoose')
// //const url = 'mongodb://localhost/comments'

// mongoose.connect(process.env.uri, {
//     useNewUrlParser:true,
//     useUnifiedTopology: true,
//     useFindAndModify: true,
//     useCreateIndex:true,
    
// })

// const connection = mongoose.connection
// connection.once('open', function() {
//     console.log('Database connected...')
// }).catch((err)=>{
//     console.log('Connection failed...')
// })