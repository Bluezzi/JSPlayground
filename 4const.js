//Const

/*
-Variables defined with const cannot be Redeclared.
-Variables defined with const cannot be Reassigned.
-Variables defined with const have Block Scope.
*/

//Must be Assigned
const PI = 3.14159265359

/*
When to use JS Const
    As a general rule, always declare a variable with const unless 
    you know that the value will change.
Use const when you declare:
    -A new Array
    -A new Object
    -A new Function
    -A new RegExp
*/

/*Constant Objects and Arrays
-It does not define a constant value. 
-It defines a constant reference to a value.

Because of this you can NOT:
-Reassign a constant value
-Reassign a constant array
-Reassign a constant object

But you CAN:
-Change the elements of constant array
-Change the properties of constant object
*/

//Constant Arrays
const cars = ["saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");

//Constant Objects
const car = {type: "BMW", model: "M4", color: "White"};
car.color = "Blue";
car.owner = "Mason";

//Block Scoping 
const x = 10;
//here x is 10
{
    const x = 2;
    //here x is 2
}
//here x is 10 again

//Redeclaring
var x = 2;
var x = 3;
x = 4;

const x = 2;
{
    const x = 3;
}

{
    const x = 4;
}
