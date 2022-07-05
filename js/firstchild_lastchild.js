var element;
document.getElementById("inner").firstElementChild.style.background="green"; //set the bg color of firstElementChild
var c = document.getElementById("inner").firstElementChild; //return the first tag of inner div.

document.getElementById("outer").lastElementChild.style.background="tan"; //set the bg color of lastElementChild
var b = document.getElementById("outer").lastElementChild; //return the last tag of outer div.

var d = document.getElementById("outer").firstChild; //return the first text node of outer div.
var e = document.getElementById("outer").lastChild; //return the last text node of outer div

console.log(b);
console.log(c);
console.log(d);
console.log(e);
//console.log(element);