/*City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

const city_country = (city:string,country:string)=>{
    console.log(`${city}, ${country}`)
}

city_country("Karachi","Pakistan")

city_country("New York", "United States")

city_country("London", "England")