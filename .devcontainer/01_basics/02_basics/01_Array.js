//Array
const myArr = [1, 6, 5, 3, 4];
const myHeroes = ["Ironman", "Shaktiman", "Donga"];
const myArr2 = new Array(1, 4, 2, 2);

console.log(myArr[3]);

//Array methods
myArr.push(8); //push at last
console.log(myArr);

myArr.pop(); //pop from last
console.log(myArr);

myArr.unshift(7); //push at start
console.log(myArr);

myArr.shift(); // pop at start
console.log(myArr);

console.log(myArr.includes(7)); //exist or not
console.log(myArr.indexOf(9)); //-1

const newArr = myArr.join();
console.log(newArr);

console.log(typeof newArr);

//slice , splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3) //[6, 5] 

console.log(myn1);
console.log(myArr); //[1,6,5,3,4]


console.log("B", myArr);

//splice
const myn2 = myArr.splice(1,3); //[6, 5, 3]
console.log(myn2);
console.log(myArr); //[1, 4]






// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.



