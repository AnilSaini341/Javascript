var element;

var parentElement = document.getElementById("test");
var target= document.getElementById("red");
var find=parentElement.contains(target); //contains Method check weather id is present in child or great grand child and returns true or false 

console.log(find);
