var a=[12,13,24,25,13];
document.write(a+"<br><br>");
var b=a.some(ifAdult);
document.write(b+"<br><br>");
function ifAdult(age)
{
  return age => 18;
}
