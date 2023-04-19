var a=[12,54,23,67,18,78.09];
document.write(a+"<br><br>");
var b=a.filter(check)
document.write(b+"<br><br>");
function check(element)
{
  return element >= 18;
}
