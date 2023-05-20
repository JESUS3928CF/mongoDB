const metodos = require('./funcionInsertar.js');
const { faker } = require('@faker-js/faker');

//! Insert De los 2000 Empleados

const clientes = [];

// for (let index = 1; index < 2001; index++) {
//     const cliente = {
//         id_cliente: index,
//         nombre: faker.person.firstName(),
//         apellido: faker.person.lastName(),
//         telefono: faker.phone.number(),
//         email: faker.internet.email(),
//         direccion: faker.address.city(),
//         estado: faker.helpers.arrayElement([true, false], 1, 1),
//     };

//     clientes.push(cliente);
// }

//* Ejecutando el método
// metodos.insertarRegistros(clientes, 'colch_star', 'cliente');

//! Insertando 3000 ventas

// const ventas = [];

// for (let index = 1; index < 5; index++) {
//     const venta = {
//         id_venta: index,
//         fecha: JSON.stringify(faker.date.recent()),
//         precio_total: Math.floor(Math.random() * 100) + 1,
//         estado_de_venta: faker.helpers.arrayElement(
//             ['En proceso', 'Finalizada', 'Cancelada'],
//             1,
//             1
//         ),
//         fk_cliente: Math.floor(Math.random() * 2000) + 1,
//     };

//     console.log(venta.fecha);
//     console.log(typeof venta.estado_de_venta);
//     console.log(venta.precio_total);
//     ventas.push(venta);
// }

//* Ejecutando el método de agregar
// metodos.insertarRegistros(ventas, 'colch_star', 'venta');

//* Falla la inserción de los documentos de venta

//! Insert De 10000 Detalles de venta

const detalles_de_ventas = [];

//* Datos mas importantes del producto

const productos = [
    {
        nombre: 'Camisa diseño grande',
        precio: 23000,
        imagen: faker.image.url(),
    },
    {
        nombre: 'Sudadera diseño pequeño',
        precio: 28000,
        imagen: faker.image.url(),
    },
    {
        nombre: 'Buzo diseño grande',
        precio: 28000,
        imagen: faker.image.url(),
    },
];

for (let index = 1; index < 10001; index++) {
    const detalle_venta = {
        id_detalle_venta: index,
        cantidad: Math.floor(Math.random() * 100) + 1,
        producto: faker.helpers.arrayElement(productos, 1, 1),
        fk_venta: Math.floor(Math.random() * 2000) + 1,
    };

    detalle_venta.subtotal =
        detalle_venta.cantidad * detalle_venta.producto.precio;

    detalles_de_ventas.push(detalle_venta);
}

//* Ejecutando el método
// metodos.insertarRegistros(detalles_de_ventas, 'colch_star', 'detalle_venta');
console.log(detalles_de_ventas);

//! error con la validación al insertar los detalle de venta
