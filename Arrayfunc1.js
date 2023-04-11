var ar = ["Maninder","Jaswinder","Anuj","Anil","Chaman"];
for(var a=0;a<5;a++)
{
  document.write(ar[a]);

}
document.write("<br>")
document.write("<p> Some Change </p>")
ar.sort();
document.write(ar);

ar.reverse();
document.write("<br>")
document.write(ar);
