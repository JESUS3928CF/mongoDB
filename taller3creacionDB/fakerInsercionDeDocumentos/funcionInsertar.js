const { MongoClient } = require('mongodb');

//! Operaciones Crud PARA INSERCIÓN DE DATOS MASIVA

//! CREATE insertMany()
const url =
    'mongodb+srv://jesus3928cf:1234@cluster0.6sahaj9.mongodb.net/?retryWrites=true&w=majority';

async function insertarRegistros(registrosNuevos, nombreDB, nombreCollection) {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const result = await client
            .db(nombreDB)
            .collection(nombreCollection)
            .insertMany(registrosNuevos);
        console.log(
            `Se insertaron ${result.insertedCount} registros correctamente.`
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

module.exports = {
    insertarRegistros,
};
