//Arithmetic  ->  +,-,/,*,%
// Operators -> && ,|| ,!
//Logical/Comparison/Relational Operators ->  >,<,=,==,===,!=,!==
//Ternary Operator -> ? :
//Increment Decrement - ++ ,--

let a  = 130;
let b =  20;
let result = a + b - (a / b)*5;
console.log(result);
console.log(15%2);

// ==  -> matches the value only
//=== -> matches value as well as datatype
//!== -> opposite of ===

let x =100;
let y ="100";
if(x !== y)
{
    console.log("Equal");
}
else
{
    console.log("Not Equal");
}

if(x > 0 || x == y)
{
    console.log("Equal");
}
else
{
    console.log("Not Equal");
}

let age = 40;
if (age <18)
{
    console.log("Adult");
}
else
{
    console.log("Not Adult");
}

//condition ? '' : ''
age > 18 ? console.log("Adult") : console.log("Child");

let i = 5;
console.log(i--);
console.log(i);
console.log(--i);