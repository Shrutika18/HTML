//variable declarations and functions are moved/hoisted to top
var number; //declaration
number = 20; //assignment
console.log(number);

hoistme();
function hoistme()
{
    console.log("I am hosted");
}

//arrow
var greet = () => 
{
    console.log("Good Morning");
};
greet();

//function expression
display();
var display = function ()
{
    console.log("Inside display");
};
