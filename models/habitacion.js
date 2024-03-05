'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var HabitacionSchema=Schema({
    NumeroHabitacion:Number,
    TipoHabitacion:String,
    CapacidadMaxima:Number,
    TipoCamas:String,
    Precio:Number,
    Disponibilidad:Boolean,
    TipoAlojamiento:String,
    Imagen:String
});
module.exports = mongoose.model('Habitacion', HabitacionSchema, 'Habitaciones');
