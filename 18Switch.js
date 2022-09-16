//Switch

//Switch Statement
//switch statement to select on of many code blocks to be executed
switch(expression) {
    case x:
        //code block
    break;
    case y:
        //code block
    break;
    default:
        //code block
}

/*
//how it works
-The switch expression is evaluated once.
-The value of the expression is compared with the values of each case.
-If there is a match, the associated block of code is executed.
-If there is no match, the default code block is executed.
*/
//The getDay() returns the weekday as a number between 0 and 6 (Sunday-Saturday)
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
    case 1:
        day = "Monday";
    case 2:
        day = "Tuesday";
    case 3:
        day = "Wednesday";
    case 4:
        day = "Thursday";
    case 5:
        day = "Friday";
    case 5:
        day = "Saturday";
    }

//The break keyword
//Stops the execution inside of the switch block

//The default keyword
//Specifies the code to run if there is no case match
//Default can be the first or last
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}

//Common Code Blocks
//Sometimes you will want different switch cases to use the same code
//Ex: case 4 and 5 share the same code block, and 0 and 6 share another code block
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is the Weekend";
        break;
    case 0:
    case 6:
        text = "It is the Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}

//Switching Details
/*
-If multiple cases matches a case value, the first case is selected.
-If no matching cases are found, the program continues to the default label.
-If no default label is found, the program goes to the statement(s) after the switch.
*/

//Strict Comparison
/*
-Switch cases use strict comparison (===).
-The values must be of the same type to match.
-A strict comparison can only be true if the operands are of the same type.
-In this ex there will be no match for x:
*/
let x = "0";
switch (x) {
    case 0:
        text = "OFF";
        break;
    case 1:
        text = "ON";
        break;
    default:
        text = "No value FOUND";
}
