// Seeing the World: Think of at least five places in the world you’d like to visit.

let $places:string[]=["Istanbol",
                    "New York",
                    "London",
                    "Melbourne",
                    "Cairo"
                ];

// Print the array in its original order

console.log(`${$places}\n`);
// Print the array in alphabetical order without modifying the actual list
var $placesSorted = [...$places].sort();

// $placesSorted.sort();

 console.log(`Alphabetical Ordered : ${$placesSorted}\n`);
 
 //Show that your array is still in its original order
 console.log(`Original Order : ${$places}\n`);

 // Print the array in reverse alphabetical order without changing the order of the original list

 $placesSorted.reverse();

 console.log("Reverse alphabetically sorted : ", $placesSorted);

// Show that the original array is still in its original order

 console.log("Original Order :" ,$places);

// Reverse the order of the original list
 $places.reverse();

console.log("Original Order Reversed : ", $places);

// Reverse the order of the list again

$places.reverse();
console.log("Back to Original Order : " ,$places);

// Sort the original array so it's stored in alphabetical order
   $places.sort();
   console.log("Alphabetically sorted: ", $places);
  
// Sort the array so it's stored in reverse alphabetical order
   $places.sort().reverse();
   console.log("Reverse alphabetically sorted: ", $places);

 export{}