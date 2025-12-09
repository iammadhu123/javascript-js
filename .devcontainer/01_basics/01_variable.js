const accountId = 144553
let accountEmail = "iammadhu@122"
var accountPassword = "12345"
accountCity = "Lucknow"//not use
let accountstate;

// accountId = 5 //not allowed
accountEmail = "madhu@123" //allowed
accountPassword = "5656" //allowed
accountCity = "GKP"


/*
Prefer not to use var 
because of issue in block scopeand functional scope
*/


console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])

