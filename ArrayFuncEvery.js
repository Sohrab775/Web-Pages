var a=[12,45,32,65,56];
document.write(a+"<br><br>");
var b = a.every(checkAge);
document.write(b+"<br><br>");
function checkAge(age)
{
  return age => 18;
}
