'use strict'
var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
mongoose.set("strictQuery",false);
var app=require('./app');
mongoose.connect('mongodb://127.0.0.1:27017/hotel')
.then(()=>{
    console.log("Conexion a BDD");
    app.listen(port,()=>{
        console.log("Conexion establecida en el url:localhost:3600 o 127.0.0.1:3600");
    })
})
.catch(err=>console.log(err))