//Booleans

//Respresents true or false
Boolean(10 > 9);    //Returns true
Boolean(1 < 0);     //returns false

//Comparisons and Conditions
/*
==	    equal to	    if (day == "Monday")
>	    greater than	if (salary > 9000)
<   	less than	    if (age < 18)
*/

//Everything with a "Value" is True
100
3.14
-15
"Hello"
"False"
7 + 1 + 3.14

//Everything without a "Value" is False
let x = 0;
Boolean(x); 
//Returns false

//Nan Boolean
let x = 10 / "Hello";
Boolean(x);
//Returns False

//Booleans as Objects
let y = new Boolean(false);

let x = false;
let y = new Boolean(false)
//typeof x returns boolean
//typeof y returns object
