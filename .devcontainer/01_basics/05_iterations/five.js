const coding = ["py", "java", "cpp", "rb", "js"]

// coding.forEach( function (val) {
//     console.log(val);
// })

//or

// coding.forEach( (item) => {
//     console.log(item);
// })

//or

function printMe(item) {
    console.log(item);
}

//coding.forEach(printMe)

//or


coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})


const myCoding = [
    {
        langName : "Java",
        langFileName : "java"
    },
    {
        langName : "Javascript",
        langFileName : "js"
    },
    {
        langName : "Python",
        langFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})