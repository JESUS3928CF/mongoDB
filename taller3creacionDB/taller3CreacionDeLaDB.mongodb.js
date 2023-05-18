//! Creación de la DB
use('colch_star');

//! Creación de la colección de cliente
db.createCollection('cliente', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Objeto validación de cliente',
            required: [
                'id_cliente',
                'nombre',
                'telefono',
                'direccion',
                'estado',
            ],
            properties: {
                id_cliente: {
                    bsonType: 'int',
                    description:
                        'Identificador único para el cliente y es requerido',
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre es un string y es requerido',
                },
                telefono: {
                    bsonType: 'string',
                    description: 'Nombre es un string y es requerido',
                },
                email: {
                    bsonType: 'string',
                    description: 'email es un string y no es requerido',
                },
                direccion: {
                    bsonType: 'string',
                    description: 'email es un string y no es requerido',
                },
                estado: {
                    bsonType: 'bool',
                    description: 'el estado es un booleano y es requerido',
                },
            },
        },
    },
});

//! Creación de la colección de venta
db.createCollection('venta', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Objeto validación de cliente',
            required: ['id_venta', 'fecha', 'precio_total', 'estado_de_venta', 'fk_cliente'],
            properties: {
                id_venta: {
                    bsonType: 'int',
                    description:
                        'Identificador unico para las ventas y es requerido',
                },
                fecha: {
                    bsonType: 'date',
                    description: 'fecha es de tipo date y es requerido',
                },
                precio_total: {
                    bsonType: 'double',
                    description: 'Precio total es un decimal y es requerido',
                },
                email: {
                    bsonType: 'string',
                    description: 'email es un string y no es requerido',
                },
                estado_de_venta: {
                    bsonType: ' ',
                    description: 'email es un string y es requerido',
                },
                fk_cliente: {
                    bsonType: 'int',
                    description:
                        'el estado es un int y es requerido ademas loso puede tener un dijito',
                },
            },
        },
    },
});

//! Creación de la tabla detalle de venta
db.createCollection('detalle_venta', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Objeto validación de cliente',
            required: [
                'id_detalle_venta',
                'cantidad',
                'subtotal',
                'producto',
                'fk_venta',
            ],
            properties: {
                id_venta: {
                    bsonType: 'int',
                    description:
                        'Identificador unico para las ventas y es requerido',
                },
                precio_total: {
                    bsonType: 'double',
                    description: 'Precio total es un decimal y es requerido',
                },
                email: {
                    bsonType: 'string',
                    description: 'email es un string y no es requerido',
                },
                estado_de_venta: {
                    bsonType: 'string',
                    description:
                        'el estado de la venta es un string y es requerido',
                },
                producto: {
                    bsonType: 'string',
                    description:
                        'el estado de la venta es un string y es requerido',
                },
                fk_venta: {
                    bsonType: 'object',
                    description: 'la venta es un int y es requerido',
                },
            },
        },
    },
});
