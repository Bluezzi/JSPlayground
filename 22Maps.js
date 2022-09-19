//Maps
//A Map holds key-value pairs where the keys can be any datatype.
//A Map remembers the original insertion order of the keys.
/*
Essential Map Methods
Method	    Description
new Map()	Creates a new Map
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	    Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	    Returns the number of elements in a Map
*/

const { useDebugValue } = require("react");

/*How to create a map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
*/

//The new Map() Method
//You can create a Map by passing an Array to the new Map() constructor:
//Ex:
//create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

//The set() Method
//Can change existing values
fruits.set("apples", 200);

//The get() Method
//gets the value of a key in a map
fruits.get("apples");   //returns 200

//The size Property
//Returns the number of elements
fruits.size;

//The delete() Method
//Removes a map element
fruits.delete("apples");

//The has() Method
//returns true if a key exists in a map
fruits.has("apples");
fruits.delete("apples");
fruits.has("apples");

/*
JavaScript Objects vs Maps
Differences between JavaScript Objects and Maps:
Object	    Map
Iterable	Not directly iterable	Directly iterable
Size	    Do not have a size property	Have a size property
Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
Key Order	Keys are not well ordered	Keys are ordered by insertion
Defaults	Have default keys	Do not have default keys
*/

//The forEach() Method
//Calls a function for each key/value pair in a Map
//List all entries
let text = "";
fruits.forEach (function(calue, key){
    text += key + ' = ' + useDebugValue;
})

//The entries() Method
//returns an iterator object with the [key, values] in a map
//List all entries
let text = "";
for (const x of fruits.entries()) {
    text += x;
}
