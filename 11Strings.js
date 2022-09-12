//Strings
//Zero or more characters written inside of "" or ''
let text = "John Doe";
or 
let text = 'John Doe';

let carName1 = "BMW M4";    //Double Quotes
let carName2 = 'BMW M4';    //Single Quotes

//Quotes in a string cant match each other
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

//String Length
//To find the length of a string, use the built in length property:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

//Escape Chracter
/*
Code    Result  Description
/'      '       Single Quote
/"      "       Double Quote
\\      \       Backslash
*/
//Double Quote: \"
let text = "We are the so-called \"Vikings\" from the north.";
//Single Quote: \'
let text = 'It\'s alright.';
//Backslash: \\
let text = "The character \\ is called backslash.";

//Other escape sequences
/*
Code        Result
\b      	Backspace
\f	        Form Feed
\n	        New Line
\r	        Carriage Return
\t	        Horizontal Tabulator
\v	        Vertical Tabulator
*/

//Breaking Long Code Lines
    /*If a JavaScript statement does not fit on one line, 
    the best place to break it is after an operator:
    */
document.getElementById("demo").innerHTML = 
"Hello Dolly!";
    //Use a backslash to break up a string
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
    //Break up a string with additions
document.getElementById("demo").innerHTML = "Hello" +
"Dolly!";

//Strings as Objects
let x = "John";
let y = new String("John");

//When using the == operator, x and y are equal
let x = "John";
let y = new String("John");

//When using the === operator, x and y are not equal
let x = "John";
let y = new String("John");

//(x == y) true or false?
let x = new String("John");
let y = new String("John");

//(x === y) true or false
let x = new String("John");
let y = new String("John");
    //Comparing two JS objects always returns false
