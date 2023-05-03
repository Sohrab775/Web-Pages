/*var element=document.getElementById("header").innerText;
console.log(element);

var element=document.getElementById("header").innerHTML;
console.log(element);

var a = document.querySelector("#header").style.border;
console.log(a);

var b = document.querySelector("#header").onclick=abc;
function abc(){
alert("How are you");
}
console.log(b);
*/

document.querySelector("#Paragraph").addEventListener("click",abc);
function abc()
{
 var element=this.style.backgroundColor="blue";
 console.log(element);
}
document.querySelector("#Paragraph").addEventListener("click",xyz);
function xyz()
{
var element = this.style.backgroundColor="crimson";
console.log(element);
}
