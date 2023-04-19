<<<<<<< HEAD
var a = {
fname:"Sohrab",
lname:"Sandhu",
Age:26,
email:"Sohrab@abc.com"
};
document.write(a+"<br><br>");
document.write(a.email+"<br><br>");
console.log(a);
console.log(a.fname);
=======
var a=[
{Name:"Rahul",Age:29},
{Name:"Nikhil",Age:32},
{Name:"Naman",Age:31}
];

a.forEach(print);
document.write("<br><br>");
a.forEach(print1);
function print(value)
{
  document.write(value+"<br>");
}
function print1(value1,value2)
{
  document.write(value2+" : Name is : "+value1.Name+" and Age is : "+value1.Age);
  document.write("<br><br>");
}
>>>>>>> 04c48ad678177870543ebca3b315942a8ea54a12
