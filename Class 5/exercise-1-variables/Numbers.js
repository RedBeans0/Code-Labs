let a = 1;
b = 2,
c = 0;
let d = 101,
e = "MINE",
f = "chris";
console.groupCollapsed("addition");
console.log(a+b);
console.log(a+c);
console.log(e + "" + f);
console.log(a+d);
console.log(e+ " is dead");
console.groupEnd("addition");

console.groupCollapsed("multiply");
console.log(a*3);
console.log(a*b);
console.log(a*c);
console.groupEnd("multiply");

console.groupCollapsed("Incro");
console.log(a + 1);
console.log(a++);
console.log(c+=a);
console.groupEnd();