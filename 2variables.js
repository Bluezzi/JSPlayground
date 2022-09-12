//Variables

//4 Ways to declare variables:
    //var
    //let
    //const
    //nothing
var x = 5;
var y = 6;
var z = x + y;

let x = 5;
let y = 6;
let z = x + y;

x = 5;
y = 6;
z = x + y;

//When to use
    //If you want a general rule: always declare variables with const.
    //If you think the value of the variable can change, use let.

//example
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

    //The two variables price1 and price2 are declared with the const keyword.
     //These are constant values and cannot be changed.
     //The variable total is declared with the let keyword.
     //This is a value that can be changed.

//Note 
    //Variables are containers for storing values.

/*JavaScript Identifiers
-All JavaScript variables must be identified with unique names.
-These unique names are called identifiers.
-Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
-The general rules for constructing names for variables (unique identifiers) are:
-Names can contain letters, digits, underscores, and dollar signs.
-Names must begin with a letter
-Names can also begin with $ and _ (but we will not use it in this tutorial)
-Names are case sensitive (y and Y are different variables)
-Reserved words (like JavaScript keywords) cannot be used as names
*/

//Assignment - =
x = x + 5;

//Equals - ==
x == x + 5

//Data Types
    //Strings are written inside double or single quotes. Numbers are written without quotes.
    //If you put a number in quotes, it will be treated as a text string.
cont pi = 3.14
let person = "John Doe";
let answer = 'Yes I am!';

//Declaring JS Variable
var carName = "BMW";
let carName = "BMW";

//Note
    //Declare all variables at the start of a project

//One statement, Many Variables
let person = "John Doe", carName = "BMW", price = 200;
//or
let person = "John Doe";
carName = "BMW"
price = 200;

//Value = undefined
let carName;

//Re-Declare JS Variables
var carName = "BMW";
var carName;
    //ONLY VAR CAN RE DECLARE, NOT LET OR CONST

//Arithmetic
let x = 5 + 2 + 3;
let x = "John" + " " + "Doe";
let x = "5" + 2 + 3;
let x = 2 + 3 + "5";
    //Note: If you put a number in quotes, the rest of the 
    //numbers will be treated as strings, and concatenated.

//Dollar Sign $
let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;

//Underscore (_)
let_lastName = "Johnson";
let_x = 2;
let_100 = 5;