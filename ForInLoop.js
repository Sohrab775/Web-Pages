var obj ={
  Name:"Aman",
  Age:34,
  email:"Aman@abc.ca",
  Gender:"male"
};
document.write(obj.Name+"<br><br>");
document.write(obj["Name"]+"<br><br>")
for(var key in obj)
{
  document.write(key+" : "+obj[key]+"<br>");
}
