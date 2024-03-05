'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ClienteSchema=Schema({
    Apellidos:String,
    Cedula:String,
    Direccion:String,
    Email:String,
    Nombres:String,
    Telefono:String
});
module.exports = mongoose.model('Cliente', ClienteSchema, 'Clientes');
