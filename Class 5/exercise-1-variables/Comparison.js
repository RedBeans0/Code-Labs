const org ='chris';
const clone = 'clark';

console.group('string');
console.log(original == 'chris'); //true
console.log(original == clone); // false
console.log(original = clone.toLowerCase()); //true
console.groupEnd();

const num1 = 10;
const num2 = "10"

console.group('numbers');
console.log(num1 == num2); //true
console.log(num1 === num2); //false
console.log(num1 != num2); //false
console.log(num1 !== num2); //true
console.groupEnd();

let what; //undefined
let thing = null;

console.group('booleans');
console.log(Boolean(what)); //false
console.log(Boolean(thing)); //false
console.log(Boolean(num1)); //true
console.log(Boolean(num2)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true
console.groupEnd();

const firstAr = [1,2,3];
const secondAr = [1,2,3];
const firstO = { color: 'red'} ;
const secondO = { color: 'red'} ;

console.group('objects and Arrays');
console.log(firstAr == secondAr);
console.log(firstO === secondO);
console.groupEnd();
console.group('and or');
console.log(Boolean('blah') && Boolean('thing')); //true
console.log(Boolean('blah') && Boolean('')); //false
console.log(Boolean('blah') || Boolean('')); //true
console.log(Boolean('') || Boolean('')); //true
console.groupEnd();