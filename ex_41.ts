/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

let magician = ["Harry Houdini","David Copperfield","Apollo Robbins"]

//magician.forEach((magicianName) => console.log(magicianName))

let serialCounter = 1
const show_magicians = () => {
    for (var i = 0;i< magician.length;i++){
        console.log(`${serialCounter}. ${magician[i]}`)
        serialCounter++
    }
}

show_magicians()