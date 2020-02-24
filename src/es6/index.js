/**
 * Default Params and Concatenation
 */


// Before ECMAScript 6

function newFunction(name, age, country){
  var name = name || "Arnold";
  var age = age || 22;
  var country = country || "Colombia";
  console.log(name, age, country );
}

// After ECMAScript 6+

function newFunction2(name = "Arnold", age = 22, country = "Colombia"){
  console.log(name, age, country );
}

newFunction();
newFunction2("Ernesto Valverde", 34, "ESP");


// Before ECMAScript 6+
let hello = "Hello",
    world = "World."
// After ECMAScript 6+
let epicPhrase = hello + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`

console.log(epicPhrase2);

/**
 * LET y CONST, Multiline, Spread Operator y Destructuring
 */

 // Before ECMAScript 6+
 let lorem = "Esta es una frase y\n" + " un salto de línea";
 // After ECMAScript 6+
 let lorem2 = `Esta es una frase épica y además
 un salto de línea`;

 console.log(lorem, lorem2);


let person = {
   name: "Arnold",
   lastName: "Restrepo",
   age: 22
 }

 // Before ECMAScript 6+
 console.log(person.name, person.lastName, person.age);
 
// After ECMAScript 6+
let {name, lastName, age} = person;

console.log(name, lastName, age);


let team1 = ["Juana", "Anita", "Valentina"];
let team2 = ["Ernesto", "Jose", "Luis"];

// After ECMAScript 6+
let education = ["Ricardo", ...team1, ...team2]; 

console.log(education);


{
  var globalVar = "Variable Global"
} 

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

