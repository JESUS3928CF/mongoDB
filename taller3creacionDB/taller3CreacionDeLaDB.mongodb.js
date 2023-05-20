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
            required: [
                'id_venta',
                'fecha',
                'precio_total',
                'estado_de_venta',
                'fk_cliente',
            ],
            properties: {
                id_venta: {
                    bsonType: 'int',
                    description:
                        'Identificador unico para las ventas y es requerido',
                },
                fecha: {
                    bsonType: 'string',
                    description: 'fecha es de tipo string y es requerido',
                },
                precio_total: {
                    bsonType: 'int',
                    description: 'Precio total es un decimal y es requerido',
                },
                estado_de_venta: {
                    bsonType: 'string',
                    description:
                        'el estado de la venta es un string y es requerido',
                },
                fk_cliente: {
                    bsonType: 'int',
                    description: 'el cliente es un int y es requerido',
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
                id_detalle_venta: {
                    bsonType: 'int',
                    description:
                        'Identificador único para las ventas y es requerido',
                },
                cantidad: {
                    bsonType: 'int',
                    description: 'Total de venta es un decimal y es requerido',
                },
                subtotal: {
                    bsonType: 'int',
                    description: 'subtotal es un double y no es requerido',
                },
                producto: {
                    bsonType: 'object',
                    description:
                        'el estado de la venta es un string y es requerido',
                },
                fk_venta: {
                    bsonType: 'int',
                    description: 'la venta es un int y es requerido',
                },
            },
        },
    },
});
