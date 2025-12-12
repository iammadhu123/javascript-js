const name = "Madhu"
const repoCount = 50
//console.log(name + repoCount + " Value");

//string interpolation
console.log(`Hello! My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("Madhu-Yadav")

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

console.log(gameName.toUpperCase());
//but the original value doesn't change
console.log(gameName[1]);

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-11, 7)
console.log(anotherString);

const newStringOne = "     Madhu      "
console.log(newStringOne);
console.log(newStringOne.trim());//remove spaces

const url = "https://madhu.com/madhu%20yadav"
console.log(url.replace('%20', '-'));

console.log(url.includes('madhu'));

//split in the basis of 'd' or anything
console.log(gameName.split('d'));



