//Singleton
//Singleton ensures a single instance across the app.

//Can be implemented with object literal, class, or IIFE.

//Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Madhu",
    "full name": "Madhu Yadav",
    //mySym: "myKey1",
    [mySym]: "myKey1", //use like symbol // this is correct syntax
    age: 21,
    location: "Lucknow",
    email: "iammadhu@123",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser."full name"); //not alloed
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

// JsUser.email = "madhu@google.com"
// Object.freeze(JsUser) //so that no one can change it
// JsUser.email = "madhu@chatgpt.com"

// console.log(JsUser["email"]); //"madhu@google.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello! Js user");
}

JsUser.greetingTwo = function() {
    console.log(`hello! Js user, ${this.name}`); //this -> when same obj ko reference krna ho
}

console.log(JsUser.greeting); //[Function (anonymous)] => f^n exe. nhi hua only reference aaya h
console.log(JsUser.greeting()); //hello! Js user

console.log(JsUser.greetingTwo); //[Function (anonymous)] 
console.log(JsUser.greetingTwo()); //hello! Js user, Madhu










