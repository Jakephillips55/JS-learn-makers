 
// this is first js code  
console.log('Hello world');
// var is old practice for declaring variables
// use let in future 
let name = 'Jake';  
// more common to use '' in js then " " 
console.log(name);  
// naming variables 
// 1. cant be named as a reserved keyword(let, if, else, var)etc
// 2. should be meaningingfull names 
// 3. cant be a number 
// 4. cant have space or - (hyphen)
// 5. camel notation > wordWordWord 
// first letter of first word is lwr case
// let firstName; let FirstName; 
// ^ these are different variables  
//let firstName = 'Jake', lastName = 'Phillips'; 
// is valid but bad practice 
let firstName = 'Jake';
let lastName = 'Phillips';
// is valid and good practice 

console.log(firstName, lastName); 
console.log(lastName);
console.log(name);

// let interestRate = 0.3; 
// interestRate = 1; 
// would change the value so make it a constant
const interestRate = 0.3
// would now get error if trying to reasign the value 

// Primitives / Value types
// String, Number, Boolean, undefined, null 
let newName = 'Damian'; // String literal 
let age = 21; // Number literal
let isIt = true; // Boolean literal (could also be false)
let newFirstName = undefined; 
let selectedColor = null; // null is used to clear value of variable

// JS is a dynamic lang meaning the type of variable
// can change at runtime 

// Reference Types 
// Object, Array, Function 

//Objects 
// let name = jake; and let age = 21; are simialr enough 
// that we can have them in the same object (similar to hash in rby)
let person = {
    name: 'Jake', 
    age: '21'
//  key | value 
}; 
// to change values you can use Dot Notation
person.name = 'Damian'
// can also use . notation in console.log
console.log(person.name); // prints damian to console
console.log(person);
// can also use Bracket Notation 
person['name'] = 'Swagger'
console.log(person.name); // < will not find changes after 
// its place in the code 
// {} = a Object literal 
let selection = 'name'; 
person[selection] = 'Jake'; 
// will let the user change name value at runtime 
console.log(person[selection]);

let selectedColors = ['red', 'blue']; 
// adding to array
// arrays are dynamic 
selectedColors[2] = 'green'; 
selectedColors[3] = 1; 
console.log(selectedColors);
// index array synatx same as ruby [0]

// performing a task 
function greet(name, lastName) {
    // name is an input + parameter to this function 
// the body 
    console.log('hello ' + name + ' ' + lastName);
}
greet('Jake', 'Phillips'); 
greet('Jake'); 
// passing a value for the parameter
// functions are a set of statements that 
// perform a task or calculates a value 

// Calculating a value 
function sqaure(num) {
   return num * num; 
}

// let num = sqaure(2); 
// dont need to do this ^ can do 
console.log(sqaure(2)); 
// think of method 
// log is a function aswell 
// so we call log on console 