let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));
console.log(valueInNumber)

//"33" => 33
//"33ab" => NaN (Not a Number)
//undefined => NaN
//null => 0
//true => 1
//false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn) 

console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
//"" => false
//"Madhu" => true

let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
