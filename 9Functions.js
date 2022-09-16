//Functions

//Block of code dessigned to perfrom a certain task
function myFunction(p1, p2) {
    return p1 * p2;        //The function returns the product of p1 and p2

}

/*Function keyword followed be a name in () separated by commas, then
    {} to hold the code to be executed
*/
function name(parameter1, parameter2, parameter3) {
    //Code to be exectued here
}

//Function Invocation
    //The code inside the function will execute when "something" invokes (calls) the function:
    //When an event occurs (when a user clicks a button)
    //When it is invoked (called) from JavaScript code
    //Automatically (self invoked)

//Function Return
    //When a return statement is reached, the function will stop executing
let x = myFunction (4, 3);  //Function is called, return value will be x
function myFunction (a, b) {
    return a * b;           //Function will return product of a and b
}
    //Will return 12

//Why Functions
    //Define the code once and use it a lot
    //Use the same code many times with different arguments, making dif results
//Example (Convert Farenheit)
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
}
//document.getElementById("demo").innerHTML = toCelsius
    //() Invokes the Function

//Functions used as Variable Values
function tempis (yyy){
    let x = toCelsius(77);
let text1 = "The temperature is" + x + "Celsius";
let text2 = "The temperature is" + toCelsius(yyy) + "Celsius";
console.log (text2)
}

//Local Variables
    //Variables are only accessed from within the function
//Code here CAN NOT use carName

function myFunction() {
    let carName = "BMW";
    //Code here CAN use carName
}

//Code here CAN NOT use carName
tempis (-9)
tempis (20)