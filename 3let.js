//Let

/*Cannot be Redeclared
Variables defined with let cannot be redeclared
You cannot accidentally redeclare a variable
*/

//YOU CANNOT DO THIS
let x = "John Doe";
let x = 0;
    //SyntaxError: 'x' has already been declared

//YOU CAN DO THIS WITH var
var x = "John Doe";
var x = 0;

//Block Scope
//Variables declared inside of a {} block cannot be accessed outside of it
{
    let x = 2;
}
//x can NOT be used here (OUTSIDE OF IT)

//Variables declared with var can be accessed out of a {} block
{
    var x = 2;
}
//x CAN be used here (OUTSIDE OF IT)

var x = 10;
//here x is 10
{
    var x = 2;
    //here x is 2
}
//x is now set to 2

let x = 10;
//here x is 10
{
    let x = 2;
    //here x is 2
}
//x is now 10

//NOTES: WITH LET: You CANT redeclare a variable in the same block
let x = 2;
{
    let x = 3;
}

{
    let x = 4;
}

//Let Hoisting
carName = "BMW"
var carName;
