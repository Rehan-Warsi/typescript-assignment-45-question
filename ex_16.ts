var $friendList:string[]=[]
$friendList.push("Asif", "Amjad", "Atif");

var $greetings = "Hi, ";

var $invitation = " Long time no see, Lets meet at Kababjees Saima Mall Gulistan-e-Johar and have dinner together.";

console.log("Hi friend, fortunetly i got reservation for bigger table so now we can invite more friends\n")

$friendList.unshift("Khalid");

$friendList.splice(2,0,"Ather");

$friendList.push("Mujahid");

for (var i = 0; i < $friendList.length; i++) {
    console.log($greetings+$friendList[i]+$invitation);
}
