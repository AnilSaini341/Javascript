var element;
document.getElementById("inner").parentElement.style.background="tan"; //set style by targeting parent node if parentElement have no parent it return null.

document.getElementById("inner").parentNode.style.margin="10px"; //if parentElement have no parent it return something.

element =document.getElementById("inner").parentElement; //parentElement returns the parent node



console.log(element);