console.log("Hello world! This is typescript.");

let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 20;
let isActiveStudent: boolean = true;
let courses: string[] = ['TS', 'JS', 'DS'];

document.write("Hello from TS world!");

function isEven(num: number){
    return num % 2 === 0;
}

console.log(isEven(5));
// console.log(isEven("s")); Not allowed in TS 

let a: unknown = 20;
let b = a === 123;
// let c = a + 10; Not allowed

if(typeof(a) === 'number'){
    let d = a + 10;
}