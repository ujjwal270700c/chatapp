const express =require('express')
const app= express();

require('./src/db/conn')

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/',require('./src/routes/user'));
app.use('/',require('./src/routes/auth'));
app.use('/',require('./src/routes/channel'));

module.exports=app;
