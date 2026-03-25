//Primitive data types -Number,BigInt,String,Boolean
let name:string="Nitesh";
console.log(name);

let age:number=30;
console.log(age);

let isStudent:boolean=true;
console.log(isStudent);

//Non-primitive data types {} () []-array, objects, functions
//Always returns an object
//let arr:number[]=[1,2,"nitesh"];//it is wrong because we have defined the array as number type but we are trying to push a string in it

let arr:number[]=[1,2,3];


//tuple
//A tuple is a data structure that can hold a fixed number of elements of different types.
let array:[number,string]=[1,"Hi!"];


//enumeration(enum)
//enums are used to define a set of named constants. 
// They can be numeric or string values. 
// By default, enums are numeric and start with 0,
//  but you can assign specific values to the enum members as well. 
// Enums help improve code readability and maintainability by giving meaningful names to constant values.
enum StatusCodes {
    NotFound=404,
    Success=200,
    ServerError=500
}

console.log(StatusCodes.NotFound);

//type inference  
//type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on 
// its initial value.
// In TypeScript, when you declare a variable and assign it a value without explicitly specifying its type, 
// the compiler infers the type from the assigned value. 
// This helps to reduce the amount of code you need to write while still providing type safety.
let message="hello bro"
// message=21;//it is wrong because we have assigned a string value to the
//  variable message and then we are trying to assign a number to it.


//type annotation
//Type annotation is a feature in TypeScript that allows you to explicitly specify the type of a variable, function parameter, or return value. 
// It provides a way to declare the expected type of a variable or function, which can help catch type-related errors during development and improve code readability.
let message1:string | number="hello bro"
message1=21;//it is correct because we have defined the variable message1 
// as a union type of string and number, so it can hold either a string or a number.

//null,undefined,void
//null and undefined are two special types in TypeScript that represent the absence of a value.
// null is an assignment value that represents the intentional absence of any object value. 
// It is often used to indicate that a variable should not point to any object or that a function does not return a value.
let myVariable:null;
let myVariable1:undefined;

//void is a special type that represents the absence of a value.
// It is typically used as the return type of functions that do not return a value.
function greet():void{
    console.log("Hello, World!");
}


//interface
//An interface in TypeScript is a way to define the structure of an object. 
// It specifies the properties and methods that an object should have, without providing the implementation details. 
// Interfaces are used to enforce a certain shape on objects and to enable type checking.
interface Person{
    id:number,
    name:string,
    age:number
}

//if we want to make the properties of the interface optional then we can use the ? operator
//if any of property is missing then it will not give any error
const Rahul:Person={
    id:1,
    name:"Rahul",
    age:30,
}

function printPErson(obj:Person):void{
    obj.id=1;
    obj.name="Nitesh";
    console.log(obj);
}

