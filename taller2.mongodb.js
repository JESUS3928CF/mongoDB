//! EJERCICIO 1

//! 1.1 
use("sample_airbnb");

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

//! 1.2

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

//! 1.3

db.listingsAndReviews.aggregate([
    
    {
        $project: {
          "cantidadComenterios": {
            $size: "$reviews"
          },
          // "reviews": true,
          "review_scores": true,
          review_scores_rating: "$review_scores.review_scores_rating"
          
        }
    },
    {
      $match: {
        $and: [
          {"cantidadComenterios": {$gte:50}},
          {review_scores_rating: { $gte: 80 }},
      
        ]
      }
  }
])

// db.listingsAndReviews.aggregate([])


