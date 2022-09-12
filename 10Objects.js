//Objects

//Object: BMW M4
//Properties            Method
car.name = BMW          car.start()
car.Model = M4          car.drive()
car.weight = 3200ib     car.brake()
car.colro = white       car.stop()

//JS Objects
let car = "M4";
const car = {type: "BMW", Model: "M4", color: "White"};

//Object Definition 
const person = {firstName: "John", lastName:  "Doe", age: 50, eyecolor: "Blue"};    
    //or
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue"
};

//Object Properties
    //name:value pairs in JS objects are called properties
/*
Property        Property Value
firstName       John
lastName        Doe
age             50
eyeColor        Blue
*/

//Accessing Object Properties
objectName.propertyName
    //or
objectname["propertyName"]

person.lastName;
    //or
person["lastName"];

//Object Methods
    //Methods are actions that can be performed on objects.
    //Methods are stored in properties as function definitions.
/*
Property        Property Value
firstName       John
lastName        Doe
age             50
eyeColor        Blue
fullName        function() {return this.firstName + "" + this.lastname;}
*/
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 556,
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
};
        //This refers to the person object
        //I.E. this.firstName means the firstName property of this.
        //I.E. this.firstName means the firstName property of person.

//What is this?
//In JavaScript, the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called).
//The this keyword refers to different objects depending on how it is used:
/*
-In an object method, this refers to the object
-Alone, this refers to the global effect
-In a function, this refers to the global object
-In a function, in strict mode, this is undefined
-In an event, this refers to the element that recieved the event
-Methods like call(), apply(), and bind(), can refer this to any object
*/
//Note: this is not a variable, it is a keyword, and CANT change the value 

//The this Keyword
//In a function definition, this refers to the "owner" of the function.
//In the example above, this is the person object that "owns" the fullName function.
//In other words, this.firstName means the firstName property of this object.

//Accessing Object Methods
objectName.methodName()
name = person.fullName();
    //Note: If you access a method without () it will return function def
name = person.fullName;

//DO NOT DECLARE STRINGS, NUMBERS, AND BOOLEANS AS OBJECTS!!!
//declared with the keyword "new", the variable is created as an object:
x = new String();       //Declares x as a String object
y = new Number();       //Declares y as a Number object
z = new Boolean();      //Declares z as a Boolean object
//Avoid string, number, and Boolean objects
    //They complicate your code and slow down execution speed
