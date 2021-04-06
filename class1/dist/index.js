"use strict";
console.log("Hello world! This is typescript.");
var firstName = "John";
var lastName = "Doe";
var age = 20;
var isActiveStudent = true;
var courses = ['TS', 'JS', 'DS'];
document.write("Hello from TS world!");
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(5));
// console.log(isEven("s")); Not allowed in TS 
var a = 20;
var b = a === 123;
// let c = a + 10; Not allowed
if (typeof (a) === 'number') {
    var d = a + 10;
}
