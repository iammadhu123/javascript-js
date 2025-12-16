const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//for in  loop
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["Js", "python", "rb", "c++", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    
}


const map = new Map()

map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "French")


for (const key in map) {
   console.log(key);
   
}