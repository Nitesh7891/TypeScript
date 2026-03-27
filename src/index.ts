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

/*********************************************************************************************************************/

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

/*********************************************************************************************************************/


//type inference  
//type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on 
// its initial value.
// In TypeScript, when you declare a variable and assign it a value without explicitly specifying its type, 
// the compiler infers the type from the assigned value. 
// This helps to reduce the amount of code you need to write while still providing type safety.
let message="hello bro"
// message=21;//it is wrong because we have assigned a string value to the
//  variable message and then we are trying to assign a number to it.

/*********************************************************************************************************************/

//type annotation
//Type annotation is a feature in TypeScript that allows you to explicitly specify the type of a variable, function parameter, or return value. 
// It provides a way to declare the expected type of a variable or function, which can help catch type-related errors during development and improve code readability.
let message1:string | number="hello bro"
message1=21;//it is correct because we have defined the variable message1 
// as a union type of string and number, so it can hold either a string or a number.

/*********************************************************************************************************************/

//null,undefined,void
//null and undefined are two special types in TypeScript that represent the absence of a value.
// null is an assignment value that represents the intentional absence of any object value. 
// It is often used to indicate that a variable should not point to any object or that a function does not return a value.
let myVariable:null;
let myVariable1:undefined;

/*********************************************************************************************************************/

//void is a special type that represents the absence of a value.
// It is typically used as the return type of functions that do not return a value.
function greet():void{
    console.log("Hello, World!");
}

/*********************************************************************************************************************/

//interface
//An interface in TypeScript is a way to define the structure of an object. 
// It specifies the properties and methods that an object should have, without providing the implementation details. 
// Interfaces are used to enforce a certain shape on objects and to enable type checking.
interface Person{
    id:number,
    name:string,
    age?:number
}

//if we want to make the properties of the interface optional then we can use the ? operator
//if any of property is missing then it will not give any error
const Rahul:Person={
    id:1,
    name:"Rahul",
}

function printPerson(obj:Person):void{
    console.log(obj);
}

printPerson(Rahul);

/*********************************************************************************************************************/

//Extending interfaces
//extending interfaces is a powerful feature in TypeScript that allows you to create new interfaces based on existing ones.
interface User{
    name:string,
    password:string,
    email:string,
}


interface Admin extends User{
    role:string,
}

function printUserRole(obj:Admin):void{
    if(obj.role==="admin")
   console.log(obj.role)
}

printUserRole({name:"Nitesh",role:"employee",password:"1234",email:"nitesh@example.com"});

//if two interfaces have same name then it will merge the properties of both the interfaces
interface User2{
    age:number,
}

interface User2{
    name:string
}


const rahul:User2={
    name:"Rahul",
    age:30,
}

console.log(rahul.name);
console.log(rahul.age);

/*********************************************************************************************************************/

//tyoe aliases
//Type aliases in TypeScript are a way to create a new name for a type. 
// They allow you to define a type that can be used in multiple places in your code, making it easier to read and maintain.
type StringOrNumber=string | number;
let variable:StringOrNumber="Hello";
variable=123;//it is correct because we have defined the variable as a union type of string and number, so it can hold either a string or a number.

/*********************************************************************************************************************/

//intersection types
//Interfaces only work with objects, not primitives
// Interface cannot do this:
type A = string;
type B = number;

type C = A & B; // strange but possible


type User3={
    name:string,
    age:number,
}

type Employee=User3 &{
    employeeId:number,
}

const mohan:Employee={
    name:"Rahul",
    age:30,
    employeeId:1234,
}
console.log(mohan.name);
console.log(mohan.age);
console.log(mohan.employeeId);

/*********************************************************************************************************************/

//classes, objects and constructors
//A class in TypeScript is a blueprint for creating objects. 
// It defines the properties and methods that an object created from the class will have. 
// A constructor is a special method in a class that is called when an object is instantiated. 
// It is used to initialize the properties of the object.
//This automatically does 3 things:

// ✔️ 1. Creates properties
// name: string;
// model: string;
// year: number;
// ✔️ 2. Assigns values
// this.name = name;
// this.model = model;
// this.year = year;
// ✔️ 3. Makes them public
// 🔥 So your class is actually equal to this:
// class Car {
//   name: string;
//   model: string;
//   year: number;
//   mileage: number = 40;

//   constructor(name: string, model: string, year: number) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//   }

//   displayInfo(): void {
//     console.log(
//       `Car Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`
//     );
//   }
// }

class Car{
   mileage:number=40;
   constructor(public name:string,public model:string,public year:number ){

   }

    displayInfo():void{
    console.log(`Car Name: ${this.name}, Model: ${this.model}, Year: ${this.year}, Mileage: ${this.mileage}`);
   }

}

let car1=new Car("Toyota", "Camry", 2020);
car1.displayInfo();

/*********************************************************************************************************************/

//passing default values to constructor parameters
class bottle{
    constructor(public brand:string,public material:string="plastic",public capacity:number){}
    display(){ console.log(`Brand: ${this.brand}, Material: ${this.material}, Capacity: ${this.capacity}`);}
}

let bottle1=new bottle("Pepsi", undefined,500);
bottle1.display();

//public, private and protected access modifiers
//In TypeScript, access modifiers are keywords that determine the accessibility of class members (properties and methods). 
// The three main access modifiers are public, private, and protected.
//public members are accessible from anywhere, both inside and outside the class.
class bag{
    constructor(public cost:number=3000,public brand:string,public material:string){ }
}
let obj=new bag(2000,"Adidas","Cotton");
console.log(obj.brand)

//private members are only accessible within the class they are defined in. They cannot be accessed from outside the class or from derived classes.
class Customer{
    private password:string;
    constructor(public name:string,public email:string,public age:number,password:string){
        this.password = password;
    }
    showpass():void{
        console.log(this.password)
    }
}
let ravi=new Customer("Ravi","ravi@example.com",25,"secret123");
ravi.showpass();

//protected members are accessible within the class they are defined in and in derived classes, but not from outside the class.
class Employee2{
    protected employeeId:number
    constructor(public name:string,public department:string,employeeId:number){
        this.employeeId=employeeId;
    }
}

class Manager extends Employee2{
    constructor(name:string,department:string,employeeId:number){
        super(name,department,employeeId);
    }
    showEmployeeId():void{
        console.log(this.employeeId);
    }
}

let manager1=new Manager("Alice","HR",1234);
manager1.showEmployeeId();

/*********************************************************************************************************************/

//readonly properties
//In TypeScript, the readonly modifier is used to mark a property as read-only.
// A readonly property can only be assigned a value at the time of declaration or within the constructor of the class. 
// Once a value is assigned to a readonly property, it cannot be changed.
class Book{
    readonly title:string
    constructor(title:string){
        this.title=title;
    }
    displayTitle():void{
        console.log(this.title);
    }
}
let book1=new Book("The Great Gatsby");
book1.displayTitle();
// book1.title="New Title";//it is wrong because we cannot change the value of a readonly property after it has been assigned.  

/*********************************************************************************************************************/

//optional properties
//In TypeScript, optional properties are properties that may or may not be present in an object.
// They are denoted by a question mark (?) after the property name in an interface or type definition. 
// Optional properties allow you to create more flexible and adaptable types, as they can be omitted when creating objects that conform to the type.


/*********************************************************************************************************************/

//static keyword

/*********************************************************************************************************************/

//Getters and setters

/*********************************************************************************************************************/

//abstract classes and methods

