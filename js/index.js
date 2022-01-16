let hacker1 = "Peter"
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Howard"
console.log (`The navigator's name is ${hacker2}`);

console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

console.log (hacker1.split("").join(" "));

console.log (hacker2.split("").reverse().join(""));

let result= hacker1.localeCompare(hacker2);

if (result > 0){
    console.log("The driver's name goes first.")
} else if( result < 0){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

