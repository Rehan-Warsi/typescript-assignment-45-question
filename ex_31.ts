// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

let username = new Array;
if (username.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i: number = 0; i < username.length; i++) {
    if (username[i] === "admin") {
      console.log(
        "Hello " + username[i] + ", would you like to see a status report?"
      );
    } else {
      console.log("Hello " + username[i] + ", thank you for logging in again.");
    }
  }
}