//While Loop

//Executes a block of code as long as the condition is true

//while loop loops through a block of code as long as the condition is true
while (condition) {
    //code block to be executed
}

//Ex: the code will loop as long as the variable is less than 10
while (i < 10) {
    text += "The number is" + i;
    i++;
}

//Do While Loop
//Repeats as long as the condition is true
do {
    //code block to be executed
}
while (condition);

/*Ex: The loop will always be executed at least once, even if the condition is false, 
because the code block is executed before the condition is tested:
*/
do {
    text += "The number is" +i;
    i++;
}
while (i < 10);

/*Comparing For and While
The loop in this example uses a for loop to collect 
the car names from the cars array:
*/
const cars = ["BMW", "Porsche", "Mercedes", "Nissan"];
let i = 0;
let text = "";

for (;cars[i];) {
    text += cars[i];
    i++;
}

/*The loop in this example uses a while loop to collect 
the car names from the cars array:
*/
const cars = ["BMW", "Porsche", "Mercedes", "Nissan"];
let i = 0;
let text = "";

while (;cars[i];) {
    text += cars[i];
    i++;
