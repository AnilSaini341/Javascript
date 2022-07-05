var element;
element=document.createElement("h2"); //createElement create a html tag
var createText=document.createTextNode("This is a text node"); //createTextNode create a html text node
var createComment=document.createComment("This is a comment"); //createComment create comment

element.appendChild(createText);  //appendChild used to add element tag and element text node.

document.getElementById("text").appendChild(element); //appendChild also used to add complete HTML tag  ( appendChild adds in last of tag )  

var target =document.getElementById("text");
target.insertBefore(element,target.childNodes[0]); // insertBefore adds html node with given position

console.log(element);
console.log(createText);
console.log(createComment);