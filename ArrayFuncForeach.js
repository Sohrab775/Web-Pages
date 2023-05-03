var a = [1,2,3,4];
document.write("<br><br>");
a.forEach(function(value){
  document.write(value+"<br>");
});
document.write("<br><br>");
a.forEach(function(value,index)
{
  document.write(index+" : "+value+"<br>");
});
document.write("<br><br>");
a.forEach(loop);
document.write("<br><br>");
a.forEach(loop1);
function loop(element)
{
  document.write(element+"<br>");
}
function loop1(element,element1)
{
  document.write(element1+" : "+element+"<br>");
}
