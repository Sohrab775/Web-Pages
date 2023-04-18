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
