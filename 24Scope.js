//Scope

/*
-Scope determines the accessibility (visibility) of variables.
-JavaScript has 3 types of scope:
Block scope
Function scope
Global scope
*/

//Block Scope
//let and const
//Only accessible in the {}
//Var
//Accessible outside of the {}

//Local Scope
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

//Function Scope
//Variables declared with var, 
//let and const are quite similar when declared inside a function.

//Global Variables
//A variable declared outside a function, becomes GLOBAL.
//All scripts and functions on a web page can access it. 
//Global variables can be accessed from anywhere in a JavaScript program.
//If you assign a value to a variable that has not been declared, 
//it will automatically become a GLOBAL variable.

//Strict Mode
//In "Strict Mode", undeclared variables are not automatically global.

//In HTML, the global scope is the window object.
//Global variables defined with the let keyword do not belong to the window object:
