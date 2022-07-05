var element;
document.getElementById("inner").children[0].style.background="blue"; //set the bg color of 1st index of inner div.
var c = document.getElementById("inner").children; //children return the childrens of a div.

var b = document.getElementById("inner").childNodes; //children return the childrens of a div (With all text nodes, enter and comments also).


console.log(b);
console.log(c);
//console.log(element);