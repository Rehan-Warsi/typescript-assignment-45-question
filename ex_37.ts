/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

const make_shirt = ( 
    size: string = "Large ",
    mes:string = "I love TypeScript"
)=> {
    console.log(`The Shirt size is ${size} and the message printed on it is ${mes}`)
}

make_shirt("Small")

make_shirt("Medium")

make_shirt("Large", "I love JavaScript")