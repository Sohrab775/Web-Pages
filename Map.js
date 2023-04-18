var a=[10,11,12,34];
document.write(a+"<br><br>");
var b=a.map(print);
document.write(b);
document.write("<br><br>")
function print(value)
{
  return value*10;
}

var c=[
  {Name:"Karan",Lname:"Sehmbi"},
  {Name:"Inder",Lname:"Soni"},
  {Name:"Narayan",Lname:"Kumar"}
];
var d=c.map(print1);
document.write(d);
function print1(value)
{
 return value.Name+" "+value.Lname;
}
