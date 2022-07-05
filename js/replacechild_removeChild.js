var element;
element= document.createElement("li");
elementtext= document.createTextNode("Wow This Works");
element.appendChild(elementtext);

var target = document.getElementById("list");
var oldElement= target.children[1];
//console.log(oldElement);
target.replaceChild(element,oldElement);  //replace child contains 2 perameters 1 for new content 2nd for old content.

var removeElement= target.children[2];
target.removeChild(removeElement); //remove child contains 1 perameter which you want to remove.