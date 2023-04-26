use("sample_restaurants")

//! 1.Mostrar todos los documentos en los restaurantes de colección. 
// db.restaurants.find({});


//! 2.    Muestre los campos del id del restaurante, nombre, distrito y cocina para todos los documentos de la colección.
// db.restaurants.find({},{"_id":true,"nombre":true,"borough":true,"cuisine":true});


//! 3.    Muestre los campos del id del restaurante, nombre, distrito y	 tipo de cocina, pero excluya el campo _id para todos los documentos en la colección restaurant.
// db.restaurants.find({},{"_id":false,"restaurant_id":true,"nombre":true,"borough":true,"cuisine":true});


//! 4.    muestre los campos restaurant_id, nombre, distrito y código postal (zipcode), pero excluya el campo _id para todos los documentos en la colección restaurant.
// db.restaurants.find({},{"_id":false,"restaurant_id":true,"name":true,"borough":true,"address.zipcode":true});

//! 5.    Mostrar todos los restaurantes que se encuentran en el distrito del Bronx.
// db.restaurants.find({"borough":"Bronx"});

//! 6.    Mostrar los primeros 5 restaurantes que se encuentran en el barrio Bronx.
// db.restaurants.find({"borough":"Bronx"}).limit(5);

//! 7.    Mostrar los primeros 3 restaurantes después de omitir los primeros 10 que se encuentran en el distrito Bronx.
// db.restaurants.find({"borough":"Bronx"}).skip(10).limit(3);

//! 8.    Encuentrar todos los restaurantes que se ubican en latitud valor inferior a -95.754168.
db.restaurants.find({"address.coord.0" : {$lt : -95.754168}})

//! 9.    encuentre la identificación del restaurante, el nombre, el municipio y la cocina de aquellos restaurantes que contienen 'Wil' como las primeras tres letras de su nombre.


//! 10.    encuentre la identificación del restaurante, el nombre, el municipio y la cocina de aquellos restaurantes que contienen 'ces' como las últimas tres letras de su nombre.
//! 11.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina de aquellos restaurantes que contienen 'Reg' como tres letras en alguna parte de su nombre.
//! 12.    Encuentre el nombre del restaurante, distrito, coordenadas (longitud y latitud) y tipo de cocina para aquellos restaurantes que contienen 'mon' como tres letras en alguna parte de su nombre.
//! 13.    Encuentre el nombre del restaurante, el distrito, coordenadas (longitud y latitud) y el tipo de cocina de aquellos restaurantes que contienen 'Mad' como las tres primeras letras de su nombre.
//! 14.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina de aquellos restaurantes cuyas especialidades no son ni 'Americana' ni 'China' y el nombre del restaurante comienza con la letra 'Wil'.
//! 15.    Encuentra los restaurantes que pertenecen al barrio Bronx y preparan platos americanos o chinos.
//! 16.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina para aquellos restaurantes que pertenecen al distrito 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
//! 17.    Encuentre el id del restaurante, el nombre, el distrito y el tipo de cocina para aquellos restaurantes que no pertenecen a los distritos de 'Staten Island', 'Queens', 'Bronx' o 'Brooklyn'.
//! 18.    Encuentre la identificación del restaurante, el nombre, el municipio y el tipo de cocina de aquellos restaurantes que lograron al menos una puntuación que no supere los 10.
//! 19.    Ordena el nombre de los restaurantes en orden ascendente junto con todas las columnas.
//! 20.    ordenar el nombre de los restaurantes en forma descendente junto con todas las columnas.
//! 21.    ordenar el nombre de la cocina en orden ascendente y para esa misma cocina el municipio debe estar en orden descendente.
//! 22.    Verificar si todas las direcciones contienen la palabra “Street” o no.
//! 23.    Escriba una consulta MongoDB que seleccionará todos los documentos en la colección de restaurantes donde el valor del campo coord es Doble.

