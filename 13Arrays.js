//Arrays

//an array is a special variable, which can hold more than one value
    //uses the const syntax
const cars = ["BMW", "Porsche", "Mercedes"];

//Why use Arrays
//Holds many values in a single name
let letter = "a";
let letter = "b";
let letter = "c";
//Better way
const letters = ["a", "b", "c"];
    //or
const letters2 = [
    "a",
    "b",
    "c"
]

//Accessing Array Elements
const cars = ["BMW", "Porsche", "Mercedes"];
let car = cars[0];
//Pulls the first value, which is "BMW"
    //0 is the first, 1 is second, 2 is third, etc

//Access the Full Array
const cars = ["BMW", "Porsche", "Mercedes"];
document.getElementById("demo").innerHTML = cars;

//Arrays are Objects
const person = ["John", "Doe", 46];
person[0]; //returns John

const person = {firstName: "John", lastName: "Doe", age:46};
person.firstName;   //returns John

//Array Elements can be Objects
//You can have objects in an Array. 
//You can have functions in an Array. 
//You can have arrays in an Array
myArray[0] = Date.now;
myArray[1] = myFuncation;
myArray[2] = myCars;

//Array Properties and Methods
cars.length //Returns the number of elements
cars.sort() //Sorts the array

//Length Property
//returns the length of an array
const fruits = ["Banana", "Orange", "Apple", "Mango",];
let length = fruits.length;
//Returns 4

//Accessing the First Array Element
//firstArray.name[0];
//Returns first array

//Accessing the Last Array Element
//let array = array[array.length - 1];
//Returns last array

//Looping Array Elements
//for loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//Array.forEach() function
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//Adding Array Elements
//push() method
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
//length property
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

//Difference between Arrays and Objects
//Arrays = Numbered
//Objects = Named


