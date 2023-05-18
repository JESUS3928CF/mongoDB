const metodos = require('./moduloCrud');

metodos.insertarRegistros(
    [
        {
            nombre: 'Yisus',
            edad: 19,
        },
    ],
    'ficha_02',
    'listado'
);
