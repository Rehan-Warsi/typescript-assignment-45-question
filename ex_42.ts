
/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified*/

let magician = ["Harry Houdini","David Copperfield","Apollo Robbins"]

const make_great=(names:string[]) => {
    let greatMagician : string[] = []
    for (var i = 0; i < names.length;i++){
        
        greatMagician.push("The Great "+names[i])
    }
    return greatMagician
}

let updated_magicians = make_great(magician);

function show_magicians(names: string[]) {
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

console.log("Original magicians: ");
show_magicians(magician);
console.log("\nUpdated magicians: ");
show_magicians(updated_magicians)