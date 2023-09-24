var $friendList:string[]=[]
$friendList.push("Asif", "Amjad", "Atif");

var $greetings = "Hi, ";

var $invitation = " Long time no see, Lets meet at Kababjees Saima Mall Gulistan-e-Johar and have dinner together.";

$friendList.unshift("Khalid");

$friendList.splice(2,0,"Ather");

$friendList.push("Mujahid");

console.log("Hi friend, unfortunetly reservation for bigger table is cancelled now we can have only two guests\n")

for (var i = 0; i <=3; i++) {
    var a = $friendList.pop();
    console.log("Sorry "+ a +" due to cancellation of bigger table, I can't invite you.")
};

console.log("\n");

for (var x = 0; x < $friendList.length; x++ ) {
    console.log($greetings+$friendList[x]+" we are still meeting for the dinner");
};

for (var y =0; y <= $friendList.length; y++) {
    $friendList.shift();
    
};

console.log($friendList);

export{}