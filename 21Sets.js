//Sets
//Essential set Methods
/*
Method	    Description
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set

Property	Description
size	    Returns the number of elements in a Set
*/

//How to Create a Set
//Passing an Array to new Set()
//Create a new Set and use add() to add values
//Create a new Set and use add() to add variables

//New Set() Method
//Create a set
const letter = new Set(["a", "b", "c"]);

//Add values afterwards to the set
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

//create a set and add variables
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

//The add() Method
letters.add("d");
letters.add("e");
//If you add equal elements, only thte first will be saved
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

//The forEach() Method
//Invokes/calls a function for each set element
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})

//The Values() Method
//returns a new ireator object containing all values in a Set
letters.values()   // Returns [object Set Iterator]
//Now you can use the Ireator object to access the elements
// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x;
}