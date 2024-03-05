'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ReservacionSchema=Schema({
    IDCliente:String,
    IDHabitacion:String,
    NumAdultos:Number,
    NumNinos:Number,
    FechaCheckIn:String,
    FechaCheckOut:String,
    Desayuno:Boolean,
    EstadoReservacion:String,
    EstadoPago:String,
    FechaReservacion:String,
    FechaCancelacion:String,
    PrecioTotal:Number,
    IdReservacion: String
});
module.exports=mongoose.model('Reservacion',ReservacionSchema,'Reservacion');

