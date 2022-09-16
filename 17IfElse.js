//If, Else, and Else If

//Conditional Statements
/*
-Use if to specify a block of code to be executed, if a specified condition is true
-Use else to specify a block of code to be executed, if the same condition is false
-Use else if to specify a new condition to test, if the first condition is false
-Use switch to specify many alternative blocks of code to be executed
*/

//The if Statement
//if statement specifies a block of code to be executed if the condition is true
if (condition) {
    //Block of code to be executed if true here
}

if (hour < 18) {
    greeting = "Good day";
}

//The else Statement
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

//The else if Statement
if (condition) {
    //Block of code to be executed if true
} else if (condition2) {
    //Block of conde to be exectued if the condition1 is false and condition2 is true
}else {
    //Block of code to be executed if condition1 and condition2 is false
}

if (time < 10) {
    greeting = "Good morning";
}else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening"
}
