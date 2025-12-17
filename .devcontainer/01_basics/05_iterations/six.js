const coding = ["py", "java", "cpp", "rb", "js"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNum = myNums.filter( (nums) =>  nums > 5)
// console.log(newNum);

// const newNum = myNums.filter( (num) => {
//     return num>5
// })
// console.log(newNum);


//OR

const newNums = []

myNums.forEach( (num) => {
    if (num > 5) {
        newNums.push(num)
    }
})
console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //callback
//   const myBooks = books.filter( (bk) => bk.genre === 'History')
//   console.log(myBooks);

let myBooks = books.filter( (bk) => bk.genre === 'History')

myBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === 'History' })
  console.log(myBooks);




//   const kab use kare?

// 👉 Jab value change nahi hone wali ho

// const name = "Madhu";
// // name = "Rahul"; ❌ error


// ✔️ Use karo jab:

// Variable ko reassign nahi karna

// Default choice hona chahiye

// Safety chahiye (accidental change se bachata hai)

// ⚠️ Important point (objects & arrays)

// const ka matlab variable ka reference fixed hota hai, value change ho sakti hai.
  
