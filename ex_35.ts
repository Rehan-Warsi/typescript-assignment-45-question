/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, 
and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, 
such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet */

let petAnimals = ["Dog","Cat","Parrot"]
let petCharacteristic :string
for (var i=0;i< petAnimals.length;i++){
    if (petAnimals[i] == "Dog"){
        petCharacteristic = "An honest companion !!"
    } else if (petAnimals[i] == "Cat") {
         petCharacteristic = "Always Playfull never get you bored !!"
    } else {
         petCharacteristic = "Talkative and Repetitive always brings smile to your face !!"
    }
    console.log(`${petAnimals[i]}: ${petCharacteristic}`)
}

console.log(`\nAny of these animals would make a great pet !!`)