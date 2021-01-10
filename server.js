const app=require('./app')
const port =process.env.PORT ||5000;
const server=app.listen(port,()=>{
    console.log(`server running at port:${port}`);
})
const io = require("socket.io")(server);
const Comment=require('./src/db/model/comment')

const express=require('express')
const path=require('path')
const view_path = path.join(__dirname, "./templets/views");
const{requiresignin}=require('./src/middlewares/common')
app.set("view engine", "hbs");
app.set("views", view_path);

app.get('/chat',requiresignin, (req,res)=>{
    res.render('index')
})

app.post('/api/comments', (req, res) => {
    const comment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    })
    comment.save().then(response => {
        res.send(response)
    })

})

app.get('/api/comments', (req, res) => {
    Comment.find().then(function(comments) {
        res.send(comments)
    })
})



io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`)
    // Recieve event
    socket.on('comment', (data) => {
        data.time = Date()
        socket.broadcast.emit('comment', data)
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data) 
    })
})