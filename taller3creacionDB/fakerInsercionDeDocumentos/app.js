const metodos = require('./funcionInsertar.js');
const { faker } = require('@faker-js/faker');

//! Insert De los 2000 Empleados

// const clientes = [];

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

const ventas = [];

for (let index = 1; index < 2; index++) {
    const venta = {
        id_venta: index,
        fecha: faker.date.recent(),
        precio_total: Math.floor(Math.random() * 1000000) + 1,
        estado_de_venta: faker.helpers.arrayElement(
            ['En proceso', 'Finalizada', 'Cancelada'],
            1,
            1
        ),
        fk_cliente: Math.floor(Math.random() * 2000) + 1,
    };

    ventas.push(venta);
}

//* Ejecutando el método de agregar
metodos.insertarRegistros(ventas, 'colch_star', 'venta');

//* Falla la inserción de los documentos de venta
