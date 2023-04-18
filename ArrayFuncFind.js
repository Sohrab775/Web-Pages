var a=[12,13,"raghav","Raman"];
document.write(a+"<br><br>");
var b=a.find(exists);
document.write(b+"<br><br>");
function exists(element)
{
  return element=="raghav";
}
