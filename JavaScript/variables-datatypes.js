//Declaration, initialization, Assignment 
//var, let , const
//var = can be redeclared
//let = cannot be redeclared or reinitialized
//const = cannot be redeclarded or assigned value to 

var x;
x = 20;
var x = 500;
var test = 1000;
var test = 10;
test = 250;
console.log(test);

//let result = 400; 
//let result = 30;
//console.log(result);

let result = 400;
result = 45;
console.log(result);

const y = 130;
console.log(y);
console.log(typeof result);

var t;
console.log(t);
var z = null;
console.log(z);

let marks = "My marks are "+ result + "and your marks are "+ test;
console.log(marks);
//Datatypes - Number,String,Boolean,undefined,null
//Array,objects

let str = `My marks are ${result} and your marks are ${test}`;
console.log(str);

//Template Literals  - ``

let positive = true;
if(positive == true)
{
    console.log("Admit");
}
else
{
    console.log("Go Home");
}

//Arrays - index starts at 0 
let Numbers = [100,600,300,400,800,700];
console.log(Numbers[1]);
let Months = ["Jan", "Feb", "Mar", "Apr", "May"];
console.log(Months[0]);

//Objects - {Key :value, Key:value, Key:Value,....}
let Student = 
{
    studentID: 1,
    studentName: "Sagar",
    studentCity: "Pune",
    studentMarks: 500,
};
console.log(Student.studentCity);

//Array Of Objects
let studentList = [
    { studentId: 1, studentName: "ABC", studentCity: "Pune", studentMarks: 200 },
    {
      studentId: 2,
      studentName: "XYZ",
      studentCity: "Mumbai",
      studentMarks: 100,
    },
    {
      studentId: 3,
      studentName: "pou",
      studentCity: "Nashik",
      studentMarks: 140,
    },
    {
      studentId: 4,
      studentName: "qaz",
      studentCity: "Thane",
      studentMarks: 190,
    },
    {
      studentId: 5,
      studentName: "plm",
      studentCity: "Kothrud",
      studentMarks: 300,
    },
  ];
  
  console.log(studentList[1].studentCity);