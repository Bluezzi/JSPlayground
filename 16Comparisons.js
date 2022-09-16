//Comparisons

//Comparison Operators
/*
EX: x = 5
Operator	   Description	               Comparing	Returns	
==	           equal to	                    x == 8	    false	
                                            x == 5	    true	
                                            x == "5"	true	
===	           equal value and equal type	x === 5	    true	
                                            x === "5"	false	
!=	           not equal	                x != 8	    true	
!==	     not equal value or not equal type	x !== 5	    false	
                                            x !== "5"	true	
                                            x !== 8 	true	
>	           greater than	                x > 8	    false	
<               less than	                x < 8	    true	
>=	            greater than or equal to	x >= 8	    false	
<=	            less than or equal to	    x <= 8	    true
*/

//How it can be used
if (age < 18) text = "Too young to buy alcohol";
if (NaN) text = "Hey dummy, thats not a number";

//Logical Operators
/*
EX: x = 6 and y = 3
Operator	Description	    Example
&&	        and	            (x < 10 && y > 1) is true	
||	        or	            (x == 5 || y == 5) is false	
!	        not	            !(x == y) is true
*/

//Conditional (Ternary) Operator
//Syntax
variablename = (condition) ? value1:value2
let voteable = (age < 18) ? "Too Young":"Old Enough";

//Comparing different types
//A non numeric string always converts to NaN, which is always false
/*
Case	    Value	
2 < 12	    true	
2 < "12"	true	
2 < "John"	false	
2 > "John"	false	
2 == "John"	false	
"2" < "12"	false	
"2" > "12"	true	
"2" == "12"	false
*/
age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age < 18) ? "Too young" : "Old Enough";
}
