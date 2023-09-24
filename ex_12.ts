export{}

var my_friends :string[]=[]
my_friends.push("Atif", "Tanveer", "Asif", "Amjad");

var $greetings = "How are you doing "

for (var i = 0; i < my_friends.length; i++) {
    console.log($greetings+my_friends[i]);    
}

