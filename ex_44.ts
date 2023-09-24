/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times, 
 using a different number of arguments each time.*/

 const sandwichMaker = (...items:string[])=> {
    console.log(
        "Items used in the prepartion : "+ items.join(",")
        )

 }

 sandwichMaker("Bread", "Chicken", "Egg","Mayonaise","Cabbage")
 sandwichMaker("Bread","Hunter Beef","Butter","Cheddar Cheese")
 sandwichMaker("Bread", "Egg", "Butter")