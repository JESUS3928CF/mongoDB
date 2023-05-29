use('colch_star');

//! Insert one de clientes
// db.cliente.insertOne(
//     {
//         id_cliente: 2001,
//         nombre: "Jesús",
//         apellido: "Cochero",
//         telefono: "3235252121",
//         email: "jescochero@gmail.com",
//         direccion: "medellin",
//         estado: true,
//     }
// );

//! Consulta de find a clientes
// db.cliente.find({estado: true});

//! Consulta findOne
// db.cliente.findOne({"id_cliente": 20});

//! Consulta de updateOne para el cliente
// db.cliente.updateOne(
//     {
//         id_cliente: 2001,
//     },
//     {
//         $set: { email: 'jesus@gmail.com' },
//         $set: { apellido: 'COCHERO' },
//     }
// );
//* Comprobar consulta anterior
// db.cliente.findOne({ id_cliente: 2001 });

//! Consulta de updateMany en la tabla cliente
// db.cliente.updateMany({
//     $and: [
//         {"id_cliente": {$gte:20}},
//         {"id_cliente": {$lte:500}}
//     ]
// },{
//     $set:{ estado: true}
// });

//! Consultas relacionales $lookup y Primer PIPELINE
//* Buscando los 15 clientes con más ventas
// db.cliente.aggregate([
//     {
//         $lookup: {
//             from: 'venta',
//             localField: 'id_cliente',
//             foreignField: 'fk_cliente',
//             as: 'ventasCliente',
//         },
//     },
//     {
//         $project: {
//             id_cliente: true,
//             nombre: true,
//             apellido: true,
//             telefono: true,
//             email: true,
//             direccion: true,
//             estado: true,
//             totalVentas: { $size: '$ventasCliente' },
//         },
//     },
//     {
//         $sort: { totalVentas: -1 },
//     },
//     {
//         $limit: 15,
//     },
// ]);

//! Consultas relacionales $lookup y Segundo PIPELINE
//* Mostrar todos los clientes que se les compraron el dia 2023-05-20 y mostrar sus ventas en un array
// db.cliente.aggregate([
//     {
//         $lookup: {
//             from: 'venta',
//             localField: 'id_cliente',
//             foreignField: 'fk_cliente',
//             as: 'ventasCliente',
//         },
//     },
//     {
//         $match: {
//             'ventasCliente.fecha': /2023-05-20/,
//         },
//     },
//     {
//         $project: {
//             id_cliente: true,
//             nombre: true,
//             apellido: true,
//             telefono: true,
//             email: true,
//             direccion: true,
//             estado: true,
//             ventasDelDia: '$ventasCliente',
//         },
//     },
// ]);

//! Ejemplo de $limit
// db.detalle_venta.aggregate([
//     {$limit: 10}
// ]);

//! Ejemplo de $sort
// db.detalle_venta.aggregate([
//     {$sort: {"subtotal": -1}}
// ]);

//! Ejemplo $lookup Más un pipeline con tres etapas
//* Se busca la venta con más detalles de ventas
// db.venta.aggregate([
//     {
//         $lookup: {
//             from: 'detalle_venta',
//             localField: 'id_venta',
//             foreignField: 'fk_venta',
//             as: 'detallesVenta',
//         },
//     },
//     {
//         $sort: { detallesVenta: -1 },
//     },
//     {
//         $limit: 1,
//     },
//     {
//         $project: {
//             _id: 1,
//             id_venta: 1,
//             fecha: 1,
//             precio_total: 1,
//             estado_de_venta: 1,
//             fk_cliente: 1,
//             detalles_venta: '$detallesVenta',
//         },
//     },
// ]);

//! Ejemplo de $unwind y en base a el lookup anterior
//* $unwind, descomponemos el campo "detalles_venta" en documentos individuales
// db.venta.aggregate([
//     {
//         $lookup: {
//             from: 'detalle_venta',
//             localField: 'id_venta',
//             foreignField: 'fk_venta',
//             as: 'detallesVenta',
//         },
//     },
//     {
//         $sort: { detallesVenta: -1 },
//     },
//     {
//         $limit: 1,
//     },
//     {
//         $project: {
//             _id: 1,
//             id_venta: 1,
//             fecha: 1,
//             precio_total: 1,
//             estado_de_venta: 1,
//             fk_cliente: 1,
//             detalles_venta: '$detallesVenta',
//         },
//     },
//     {
//         $unwind: '$detalles_venta'
//     },
// ]);

//todo:  Consultas para eliminar
//! Consulta de deleteOne en detalle de venta
//* eliminando el primer registro
// db.detalle_venta.deleteOne({"id_detalle_venta":1});

//! Consulta de deleteMany en detalle de venta
//* Eliminando 101 registros
// db.detalle_venta.deleteMany({
//     $and: [
//         { id_detalle_venta: { $gte: 9000 } },
//         { id_detalle_venta: { $lte: 9100 } },
//     ],
// });

//! Eliminando una colección
// db.cliente.drop();


//! Eliminando la base de datos
// db.dropDatabase();

