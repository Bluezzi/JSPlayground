//Arrow Function

//Arrow functions allow us to write shorter function syntax:
let myFunction = (a, b) => a * b;

hello = () => {
    return "Hello World!";
  }

//Arrow Functions Return Value by Default:
hello = () => "Hello World!";

//Arrow Function With Parameters:
hello = (val) => "Hello " + val;

//Arrow Function Without Parentheses:
hello = val => "Hello " + val;

//What About this
/*
-The handling of this is also different in arrow functions compared to regular 
functions.
-In short, with arrow functions there are no binding of this.
-In regular functions the this keyword represented the object that called the function, 
which could be the window, the document, a button or whatever.
-With arrow functions the this keyword always represents the object that defined the 
arrow function.
-Let us take a look at two examples to understand the difference.
-Both examples call a method twice, first when the page loads, and once again when the 
user clicks a button.
-The first example uses a regular function, and the second example uses an arrow 
function.
-The result shows that the first example returns two different objects 
(window and button), and the second example returns the window object twice, 
because the window object is the "owner" of the function.
*/
//With a regular function this represents the object that calls the function:
// Regular Function:
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);

//With an arrow function this represents the owner of the function:
// Arrow Function:
hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);