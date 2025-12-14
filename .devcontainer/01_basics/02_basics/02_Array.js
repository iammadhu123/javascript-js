const marvel_heros = ["Ironman", "thor", "Spiderman"]
const dc_heros = ["batman", "flash", "superman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][1]);



// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros);


//spread

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_Arr = another_Arr.flat(Infinity) //1 2 3 ...

console.log(real_another_Arr);


//-------------------
console.log(Array.isArray("Madhu")); //false
console.log(Array.from("Madhu"));
console.log(Array.from({name: "Madhu"})); //[]  //interesting case

let score1 = 100
let sc0re2 = 200
let score3 = 300

console.log(Array.of(score1, sc0re2, score3));




