var a=[12,13,"raghav","elena","Aman","raman"]
document.write(a+"<br><br>");
var b=a.findIndex(check);
document.write(b+"<br><br>");
function check(element)
{
  return element=="elena";
}
