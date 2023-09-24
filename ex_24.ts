// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Conditional Tests
let carname = "subaru";
let year = 2023;
let countries = ["USA", "Canada", "Mexico"];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(carname == "subaru");
console.log("Is car == 'Subaru'? I predict False.");
console.log(carname == "Subaru");

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(carname.toLowerCase() == "subaru");
console.log("Is car.toLowerCase() == 'Subaru'? I predict False.");
console.log(carname.toLowerCase() == "Subaru");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is year == 2023? I predict True.");
console.log(year == 2023);
console.log("Is year != 2023? I predict False.");
console.log(year != 2023);
console.log("Is year > 2019? I predict True.");
console.log(year > 2019);
console.log("Is year < 2019? I predict False.");
console.log(year < 2019);
console.log("Is year >= 2023? I predict True.");
console.log(year >= 2023);
console.log("Is year <= 2023? I predict True.");
console.log(year <= 2023);

// Tests using "and" and "or" operators
console.log("Is car == 'subaru' and year == 2023? I predict True.");
console.log(carname == "subaru" && year == 2023);
console.log("Is car == 'subaru' or year == 2023? I predict True.");
console.log(carname == "subaru" || year == 2023);

// Test whether an item is in a array
console.log("Is 'Canada' in the countries array? I predict True.");
console.log(countries.includes("Canada"));
console.log("Is 'Brazil' in the countries array? I predict False.");
console.log(countries.includes("Brazil"));

// Test whether an item is not in a array
console.log("Is 'Canada' not in the countries array? I predict False.");
console.log(!countries.includes("Canada"));
console.log("Is 'Brazil' not in the countries array? I predict True.");
console.log(!countries.includes("Brazil"));