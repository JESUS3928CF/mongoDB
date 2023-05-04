//!  1) Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, cuál es la propiedad con mayor número de servicios ("amenities") de la colección.

use('sample_airbnb');

// db.listingsAndReviews.aggregate([
//     { $project: {
//         "name": true,
//       numAmenities: {
//         $size: "$amenities"
//       }
//     }},
//     {
//         $sort: {
//             numAmenities: -1
//         }
//     },
//     {
//         $limit: 1
//     }
// ]);

//! 2 Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, el número de propiedades que tienen conexión a Internet, sea desde Wifi o desde cable (Ethernet). Nota. Revise el campo amenities (“servicios”)

// db.listingsAndReviews.aggregate([
//     {
//         $match: {
//           "amenities": {
//             $in: ["Internet","Wifi"]
//           }
//         }
//     },
//     {
//         $project: {
//             "name": true,
//             "amenities": true
//         }
//     },
//     {
//       $count: 'amenities'
//     }
// ])

//! 3) Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, todas las propiedades que hayan recibido 50 o más comentarios, que la valoración ("review_score_rating") sea mayor o igual a 80, que cuenten con conexión a Internet vía cable y que estén ubicadas en Brazil.

// db.listingsAndReviews.aggregate([
//     {
//         $match: {
//             'address.country': 'Brazil',
//             amenities: 'Internet',
//         },
//     },
//     {
//         $project: {
//             cantidadComenterios: {
//                 $size: '$reviews',
//             },
//             amenities: {
//                 $filter: {
//                     input: '$amenities',
//                     as: 'servicio',
//                     cond: { $eq: ['$$servicio', 'Internet'] },
//                 },
//             },
//             // country: '$address.country',
//             'address.country': true,
//             review_scores_rating: '$review_scores.review_scores_rating',
//         },
//     },
//     {
//         $match: {
//             $and: [
//                 { cantidadComenterios: { $gte: 50 } },
//                 { review_scores_rating: { $gte: 80 } },
//             ],
//         },
//     },
// ]);


//! 4 Usando la colección listingsAndReviews de sample_airbnb, muestre el costo promedio de una habitación en cada país para las propiedades de tipo casa.

// db.listingsAndReviews.aggregate([
//     {
//         $match: {
//             property_type: 'House',
//         },
//     },
//     {
//         $group: {
//             _id: '$address.country',
//             avg_price: {
//                 $avg: '$price',
//             },
//         },
//     },
// ]);


//* Utilizando la base datos de sample_restaurants, construir un tablero que nos permita mostrar:

use('sample_restaurants');

db.restaurants.count();

//! ¿Cuántos restaurantes hay en total?

//! ¿Cuál es el distrito que cuenta con el mayor número de restaurantes?

//! ¿Cuántos restaurantes hay por cada tipo de cocina?

//! ¿Cuántos restaurantes hay por cada código postal?
