//Immediately Invoked Functions Expressions (IIFE)

//two reason to use IIFE:
    //to avoid pollution from global scope
    //to immediately exe. a f^n

//you've to end the IIFE f^n using semicolon when using two IIFE's.
//2nd parenthesis is using for execution of f^n


(function chai() {
    console.log(`DB CONNECTED`);
    
})();

//+++++++++++++++++++++++++++++++++

(function code(){//named IIFE
    console.log(`BD CONNECTED TWO`);
})();

//+++++++++++++++++++++++++++++++

// F^n can also be declared using arrow f^ns(unnamed IIFE).
(  ()  =>  {
    console.log(`BD CONNECTED`);
})();

//++++++++++++++++++++++++
(  (name)  =>  {
    console.log(`BD CONNECTED, ${name}`);
})("Madhu")



