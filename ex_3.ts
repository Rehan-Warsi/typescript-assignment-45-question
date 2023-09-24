let name : string
name = "reHan kHan waRsi";

// lower case
console.log(name.toLowerCase());

// UPPER CASE
console.log(name.toUpperCase());

// Title Case

function toTitleCase(name:string) {
    return name.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(toTitleCase(name));

export{}