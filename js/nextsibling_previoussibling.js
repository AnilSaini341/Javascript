var element;
var element = document.getElementById("inner_child_c").previousElementSibling.innerHTML;

var b = document.getElementById("inner_child_c").previousElementSibling; //return the previous html tag of inner_child_c div.

var c = document.getElementById("inner_child_c").nextElementSibling; //return the next html tag of inner_child_c div.

var b1 = document.getElementById("inner_child_c").previousSibling; //return the previous text node of inner_child_c div.

var c1 = document.getElementById("inner_child_c").nextSibling; //return the next text node  of inner_child_c div.

console.log(b);
console.log(c);
console.log(b1);
console.log(c1);
console.log(element);