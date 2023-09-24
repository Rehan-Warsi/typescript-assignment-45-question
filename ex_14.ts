var $friendList :string[]=[]
$friendList.push("Asif", "Tanveer", "Atif");

var $greetings = "Hi, ";

var $invitation = " Long time no see, Lets meet at Kababjees Saima Mall Gulistan-e-Johar and have dinner together"

for (var i = 0;i <= 2; i++ ) {
    console.log($greetings+$friendList[i]+$invitation);
    console.log();
 }