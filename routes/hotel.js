'use strict'
var express=require('express');
var HotelController=require('../controllers/hotel');    
var router=express.Router();
var multipart=require('connect-multiparty');
var multiPartMiddleWare=multipart({uploadDir:'./uploads'});
//pagina de inicio
router.get('/home',HotelController.home);
//ver informacion de todos los Habitacions
router.get('/habitaciones',HotelController.getHabitaciones);
// //guardar informacion de un Habitacion
router.post('/guardar-habitacion',HotelController.saveHabitacion);
// //ver informacion de un Habitacion
router.get('/habitacion/:id',HotelController.getHabitacion);
// //eliminar informacion de un Habitacion
router.delete('/habitacion/:id',HotelController.deleteHabitacion);
// //actualizar informacion de un Habitacion
router.put('/habitacion/:id',HotelController.updateHabitacion);
// //agregar imagenes
//router.post('/subir-imagen/:id',multiPartMiddleWare,HotelController.uploadImagen);
// //recuperar imagenes
router.get('/get-imagenhabitacion/:imagen',HotelController.getImagenHabitacion);


//ver informacion de todos los Reservacions
router.get('/reservaciones',HotelController.getReservaciones);
// //guardar informacion de un Reservacion
router.post('/guardar-reservacion',HotelController.saveReservacion);
// //ver informacion de un Reservacion
router.get('/reservacion/:id',HotelController.getReservacion);
// //eliminar informacion de un Reservacion
router.delete('/reservacion/:id',HotelController.deleteReservacion);
// //actualizar informacion de un Reservacion
router.put('/reservacion/:id',HotelController.updateReservacion);

// guardar cliente
router.post('/guardar-cliente',HotelController.saveCliente);
router.get('/cliente/:id',HotelController.getCliente);



router.post('/enviar-correo',HotelController.obtenerEnviarCorreoVerificacion);
module.exports=router;