
var $friendList :string[]=[]
$friendList.push("Asif", "Tanveer", "Atif");

var $greetings = "Hi, ";

var $invitation = " Long time no see, Lets meet at Kababjees Saima Mall Gulistan-e-Johar and have dinner together.";

console.log($friendList[1]);

$friendList.splice(1,1,"Amjad");

for (var i = 0; i < $friendList.length; i++) {
    console.log($greetings + $friendList[i] + $invitation);
}