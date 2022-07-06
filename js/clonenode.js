var element;

var target = document.getElementById("list").children[2]; //
var copyElement= target.cloneNode(true); //cloneNode works with perameter true or false. true copy full html and false copy tag only.  (cloneNode copy form node)

console.log(copyElement);

document.getElementById("list1").appendChild(copyElement); //add in list1 with append child method
