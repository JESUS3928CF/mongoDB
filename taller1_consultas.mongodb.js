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
db.restaurants.find({"borough":"Bronx"}).skip(10).limit(3);

//!

