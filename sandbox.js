/* ---------------------------- //explicit types ---------------------------- */
var character;
var age;
var isLoggedIn;
// isLoggedIn=25
isLoggedIn = false;
/* -------------------------------- //arrays -------------------------------- */
var ninjas = [];
ninjas.push('mukthar');
ninjas = ['10', '23'];
/* ------------------------------ //union types ----------------------------- */
var mixed = [];
mixed.push('hallo');
// mixed.push(22)
mixed.push(false);
console.log(mixed);
var uid;
uid = 123;
uid = 'fs';
// uid=false
/* -------------------------------- //objects ------------------------------- */
var ninjaOne;
ninjaOne = { name: 'mukthar', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'mario',
    age: 32,
    beltColour: 'fsfs'
};
