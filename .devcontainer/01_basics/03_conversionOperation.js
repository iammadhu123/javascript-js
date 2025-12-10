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


//*****************OPERATION*********************/

let value = 4
let negVal = -value
console.log(negVal);

console.log(2+2);
console.log(2-2);
console.log(2*4);
console.log(2**3);//2 to the power 3
console.log(2/3);
console.log(2%3);//2

let str1 = "Hello!"
let str2 = " Madhu"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(2 + "4");
console.log("1" + (2 + 2));//14
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(true);//true
console.log(+true);//1
//console.log(true+); //error
console.log(+"");//0


let num1, num2, num3
num1 = num2 = num3 = 7
console.log(num2+num3);

let gameCounter = 100
gameCounter++
console.log(gameCounter);

















