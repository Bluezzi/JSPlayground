//Numbers

//Numbers can be written with or without decimals
let x = 3.14;
let y = 3;

//Scientific notation
let x = 123e5;      //12300000
let y = 123e-5;     //0.00123

//Numbers are always 64 bit floating point
//Value             Exponent            Sign
//52 bits (0 -51)   11 bits (52 - 62)   1 bit (63)

//Interger Precision
//up to 15 digits with no period or notation
let x = 999999999999999  //x will be 999999999999999
let y = 9999999999999999 //y will be 10000000000000000

//Floating Precision
//Not always accurate
let x = 0.2 + 0.1;
//Accurate
let x = (0.2 * 10 + 0.1 * 10) / 10;

//Adding Numbers and Strings
//Add 2 numbers, the result will be a number
let x = 10;
let y = 20;
let z = x + y;
//If you add two strings, the result will be a string concatenation 
let x = "10";
let y = "20";
let z = x + y;
//If you add a number and a string, the result will be a string concatenation
let x = 10;
let y = "20";
let z = x + y;

//Numeric Strings
let x = 100;    //x is a number
let y = "100"   //y is a string
//JS tries to convert strings to numbers if it can
//This works
let x = "100";
let y = "10";
let z = x / y;      //z = 10
//Works with all operations except for addition (+)

//NaN  - Not a Number
let x = 100 / "Apple";
isNaN(x);

//Infinity
//Infinity or -Infinity is the largest or smallest possible outcome
let myNumber = 2;
//Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}

//Hexadecimal
let x = 0xFF;
//by default, JS displays numbers as base 10
//You can use the toString() method to output numbers from base 2 to 36
//Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

//Numbers as Objects
//Numbers can be defined as objects with new
let x = 123;
let y = new Number (123);
//DO NOT CREATE NUMBER OBJECTS
//THE NEW KEYWORD COMPLICATES CODE AND SLOWS DOWN EXECUTION SPEED
//NUMBER OBJECTS CAN PRODUCE UNEXPECTED RESULTS
