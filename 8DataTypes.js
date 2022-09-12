//Data Types

let length = 16;                                //Number
let lastName = "Johnson";                       //String
let x = {firstName: "John", lastName: "Doe"};   //Object

//Numbers + Strings
let x = 16 + 4 + "BMW";
    //Result: 20 Volvo
let x = "BMW" + 16 + 4;
    //Result: Volvo164

//JS Types are Dynamic 
    //The same variable can be used to hold different data types:
let x;      //Now x is undefined
x = 5;      //Now x is a number
x = "John"  //Now x is a string

//Strings
    //Series of characters written in quotes
let carName1 = "BMW M4";    //Using double quotes
let carName2 = 'BMW M4';    //Using single quotes
    //You CANT let strings inside of a quote be the same
let answer1 = "Let's learn this!";
let answer3 = 'He is named "Demon"';

//Numbers
let x1 = 34.00; //With Decimals
let x2 = 34;    //Without Decimals
    //Scientific notation
let y = 123e5;  //12300000
let z = 123-5;  //0.00123

//Booleans
    //Two values, true or false
    //Used in control testing
let x = 5;
let y = 5;
let z = 6;
(x == y);   //Returns True
(x == z);   //Returns false

//Arrays 
    //Written with brackets
const cars = ["Mercedes", "Porsche", "BMW"];

//Objects
    //Written with squiggle brackets
const person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "Blue";}

//typeof Operator
    //returns the type of a variable or expression
typeof ""           //Returns "string"
typeof "John"       //Returns "string"
typeof "John Doe"   //Returns "string"
typeof 0            //Returns "number"
typeof 314          //Returns "number"
typeof 3.14         //Returns "number"
typeof (3)          //Returns "number"
typeof (3 + 4)      //Returns "number"

//Undefined
    //A variable without a value is undefined
let car;    //Value is undefined, type is undefined
    //Any variable can be emptied, by setting the value to undefined
        //Also sets type to undefined
car = undefined;    //Value is undefined, Type is undefined

//Empty Values
    //Not related to undefined
    //Has both a legal value and a type
let car = "";   //The value is "", the typeof is "string"
