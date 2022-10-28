/* ---------------------------- //explicit types ---------------------------- */

let character:string
let age:number
let isLoggedIn:boolean;

// isLoggedIn=25
isLoggedIn=false


/* -------------------------------- //arrays -------------------------------- */

let ninjas:string[] =[];
ninjas.push('mukthar')
ninjas=['10','23']
/* ------------------------------ //union types ----------------------------- */

let mixed:(string|boolean)[]=[]
mixed.push('hallo')
// mixed.push(22)
mixed.push(false)
console.log(mixed);

let uid: string|number;
uid=123
uid='fs'
// uid=false

/* -------------------------------- //objects ------------------------------- */

let ninjaOne:object
ninjaOne={name:'mukthar',age:30}

let ninjaTwo:{
  name:string,
  age:number,
  beltColour:string
}

ninjaTwo={ name:'mario',
  age:32,
  beltColour:'fsfs',
}
