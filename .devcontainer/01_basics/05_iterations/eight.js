const myNums = [1, 2, 3]

const sumofTotal = myNums.reduce(function (acc, currVal) {
    //console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)   //initial value of accumulator
//console.log(sumofTotal);

//by arrow f^n

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(myTotal);


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
