// Checking Usernames: Do the following to create a program that simulates how
// websites ensure that everyone has a unique username.

let current_users: string[] = ["Azmeer","admin", "rehan", "Ali", "Aarfeen",];
let new_users : string[] = ["Rehan", "Haris", "AZMEER","Saad","Admin"]
let isUsernameTaken : boolean

for (var i = 0; i < new_users.length; i++) {
    let newUsers = new_users[i].toLowerCase()
    isUsernameTaken = false
    
    for (var j = 0; j < current_users.length; j++){
        let currentUsername = current_users[j].toLowerCase()
        
        if (currentUsername === newUsers) {
            isUsernameTaken = true
            break
        }else { 
            isUsernameTaken = false 
        }
    } 
    if (isUsernameTaken == true){
        console.log( "The username " +
        new_users[i] +
        " is already taken. Please enter a new username."
      );
    } else {
        console.log("The username " + new_users[i] + " is available.");
      }
    }
