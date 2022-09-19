//Errors
/*
-The try statement defines a code block to run (to try).
-The catch statement defines a code block to handle any error.
-The finally statement defines a code block to run regardless of the result.
-The throw statement defines a custom error.
*/

//try and catch
/*
-The try statement allows you to define a block of code to be tested for 
errors while it is being executed.
-The catch statement allows you to define a block of code to be executed, 
if an error occurs in the try block.
-The JavaScript statements try and catch come in pairs:
*/
try {
    //block of code to try
}
catch(err) {
    //Block of code to handle errors
}

//The throw Statement
/*
The throw statement allows you to create a custom error.
Technically you can throw an exception (throw an error).
The exception can be a JavaScript String, a Number, a Boolean or an Object:
*/
throw "Too Big";    //throw a text
throw 500;          //throw a number

//Input Validation Example
/*
-This example examines input. If the value is wrong, an exception (err) is thrown.
-The exception (err) is caught by the catch statement and a custom error 
message is displayed:
*/
        // <!DOCTYPE html>
        // <html>
        // <body>

        // <p>Please input a number between 5 and 10:</p>

        // <input id="demo" type="text">
        // <button type="button" onclick="myFunction()">Test Input</button>
        // <p id="p01"></p>

        // <script>
        // function myFunction() {
        //   const message = document.getElementById("p01");
        //   message.innerHTML = "";
        //   let x = document.getElementById("demo").value;
        //   try {
        //     if(x == "") throw "empty";
        //     if(isNaN(x)) throw "not a number";
        //     x = Number(x);
        //     if(x < 5) throw "too low";
        //     if(x > 10) throw "too high";
        //   }
        //   catch(err) {
        //     message.innerHTML = "Input is " + err;
        //   }
        // }
        // </script>

        // </body>
        // </html>

//HTML Validation
//Modern browsers will often use a combination of JavaScript and built-in HTML 
//validation, using predefined validation rules defined in HTML attributes:
<input id="demo" type="number" min="5" max="10" step="1"></input>

//The finally statement
//The finally statement lets you execute code, after try and catch,
//regardless of the result:
try {
    Block of code to try
  }
  catch(err) {
    Block of code to handle errors
  }
  finally {
    Block of code to be executed regardless of the try / catch result
  }

//Example
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
      if(x == "") throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10) throw "is too high";
      if(x < 5) throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Error: " + err + ".";
    }
    finally {
      document.getElementById("demo").value = "";
    }
  }

//The Error Object Properties
/*
Property	Description
name	Sets or returns an error name
message	Sets or returns an error message (a string)
*/

//Error Name Values
/*
Error Name	    Description
EvalError	    An error has occurred in the eval() function
RangeError	    A number "out of range" has occurred
ReferenceError	An illegal reference has occurred
SyntaxError	    A syntax error has occurred
TypeError	    A type error has occurred
URIError	    An error in encodeURI() has occurred
*/

//Range Error
//RangeError is thrown if you use a number that is outside the range of legal values.
//For example: You cannot set the number of significant digits of a number to 500.
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//Reference Error
//Thrown if you use a variable thats not declared
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;

//Syntax Error
//If you eval a code that has a syntax error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }

//Type Error
//thrown if you use a value that is outside the range of expected types:
let num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//URI (Uniform Resource Identifier) Error
//thrown if you use illegal characters in a URI function:
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }

//Non-Standard Error Object Properties
/*
*Mozilla and Microsoft defines some non-standard error object properties:*
fileName (Mozilla)
lineNumber (Mozilla)
columnNumber (Mozilla)
stack (Mozilla)
description (Microsoft)
number (Microsoft)
*Do not use these properties in public web sites. They will not work in all browsers.*
*/
