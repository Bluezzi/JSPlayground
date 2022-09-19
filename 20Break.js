//Break and Continue
//The break statement "Jumps Out" of a loop
//The continue statement "Jumps Over" one iteration in the loop

//The Break Statement
//Jumps out of loop
//Ex: jumps out at 3
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is" + i + "<br>";
}

//The Coninue Statement
//Continues the next iteration
//Ex: skips 3
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "The number is" + i + "<br>";
}

//Labels
/*To label JavaScript statements you precede the statements with a label name 
and a colon:
*/
label:
statements

break labelname;
continue labelname;

//label reference lets the break statement jump out of any code block
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}