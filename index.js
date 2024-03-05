'use strict'
var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');
mongoose.connect('mongodb+srv://root:12345@servermongodb.8gwwirl.mongodb.net/?retryWrites=true&w=majority&appName=ServerMongoDB/hotel')
.then(()=>{
    console.log("Conexion a BDD");
    app.listen(port,()=>{
        console.log("Conexion establecida en el url:localhost:3600 o 127.0.0.1:3600");
    })
})
.catch(err=>console.log(err))
