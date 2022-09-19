//this Keyword

//this
//refers to an object
/*
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/

//this in a Method
/*
When used in an object method, this refers to the object.
In the example on top of this page, this refers to the person object.
Because the fullName method is a method of the person object.
*/
fullName : function() {
    return this.firstName + " " + this.lastName;
  }

//this alone
/*
When used alone, this refers to the global object.
Because this is running in the global scope.
In a browser window the global object is [object Window]:
*/
let x = this;
//in strict mode, this refers to the global object
"use strict";
let x = this;

//this in a Function (Default)
/*
In a function, the global object is the default binding for this.
In a browser window the global object is [object Window]:
*/
function myFunction() {
    return this;
  }

//this in a strict Function
/*
JavaScript strict mode does not allow default binding.
So, when used in a function, in strict mode, this is undefined.
*/
"use strict";
function myFunction() {
  return this;
}

//this in Event Handlers
//In HTML event handlers, this refers to the HTML element that received the event:
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

//Object Method Binding
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };

//Explicit Function Binding
/*
The call() and apply() methods are predefined JavaScript methods.
They can both be used to call an object method with another object as argument.
*/
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

//Function Borrowing
/*
With the bind() method, an object can borrow a method from another object.
This example creates 2 objects (person and member).
The member object borrows the fullname method from the person object:
*/
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);

//this Precedence
/*
To determine which object this refers to:
Precedence	Object
1	        bind()
2	        apply() and call()
3	        Object method
4	        Global scope

-Is this in a function being called using bind()?
-Is this in a function is being called using apply()?
-Is this in a function is being called using call()?
-Is this in an object function (method)?
-Is this in a function in the global scope.
*/
